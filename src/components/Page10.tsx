import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LvlsOfWellness from './LvlsOfWellness';

const Page10 = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(1);
  
  const mediaLinks = [
    [
      '/assets/comp1/image1.png',
      '/videos/Comp1Vid.mp4',
      '/assets/comp1/image2.png',
    ],
    [
      '/assets/comp2/image1.png',
      '/videos/Comp2Vid.mp4',
      '/assets/comp2/image2.png',
    ],
    [
      '/assets/comp3/image1.png',
      '/videos/Comp3Vid.mp4',
      '/assets/comp3/image2.png',
    ],
    [
      '/assets/comp4/image1.png',
      '/videos/Comp4Vid.mp4',
      '/assets/comp4/image2.png',
    ],
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  if (!isClient) {
    return <div className="h-screen">Loading...</div>;
  }

  return (
    <>
      {isSmallScreen ? (
        <p>Small Screen</p>
      ) : (
        <div className="flex flex-col justify-center items-center bg-white">
          <p className="bg-transparent text-black font-semibold xl:text-5xl lg:text-3xl md:text-xl text-center p-4">
            Experience New Levels of Wellness
          </p>
          
          {/* Component Selection */}
          <div className="flex flex-row justify-between items-center gap-64">
            {['Wakeup Feeling Refreshed', 'Get Active', 'Stay Informed', 'Relax and Recover'].map(
              (label, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                  <button
                    className={`bg-transparent text-black font-semibold text-lg p-2 ${
                      selectedComponent === index + 1 ? 'underline' : ''
                    }`}
                    onClick={() => setSelectedComponent(index + 1)}
                  >
                    {label}
                  </button>
                  {selectedComponent === index + 1 && (
                    <div className="h-[3px] w-full bg-black" />
                  )}
                </div>
              )
            )}
          </div>

          <div className="h-[1px] w-3/4 bg-black" />

          <div className="bg-transparent flex flex-row mt-20">
            <LvlsOfWellness media={mediaLinks[selectedComponent - 1]} />
          </div>
        </div>
      )}
    </>
  );
};

export default Page10;
