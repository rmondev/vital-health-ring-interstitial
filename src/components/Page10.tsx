import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LvlsOfWellness from './LvlsOfWellness';
import LvlsOfWellNessSml from './LvlsOfWellNessSml';

const Page10 = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(1);
  
  const mediaLinks = [
    [
      '/assets/comp1/image1.png',
      '/videos/Comp1Vid.mp4',
      '/assets/comp1/image2.png',
      'Wakeup Feeling Refreshed',
    ],
    [
      '/assets/comp2/image1.png',
      '/videos/Comp2Vid.mp4',
      '/assets/comp2/image2.png',
        'Get Active',
    ],
    [
      '/assets/comp3/image1.png',
      '/videos/Comp3Vid.mp4',
      '/assets/comp3/image2.png',
        'Stay Informed',
    ],
    [
      '/assets/comp4/image1.png',
      '/videos/Comp4Vid.mp4',
      '/assets/comp4/image2.png',
        'Relax and Recover',
    ],
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  if (!isClient) {
    return <div className="h-screen">Loading...</div>;
  }

  const settings = {
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  console.log('Slider settings:', settings); // Debugging line

  return (

    
    <>
      {isSmallScreen ? (
        <div className="flex flex-col justify-center items-center bg-white">
            <p className='text-black bg-white text-xl text-center font-bold pt-2'>Experience New Levels of Wellness</p>
        <div className="w-full p-2 bg-white">
        <Slider {...settings}>
        {mediaLinks.map((media, index) => (
            <div key={index}>
            <LvlsOfWellNessSml media={media} />
            </div>
        ))}
        </Slider>
        </div>
        </div>


      ) : (
        <div className="flex flex-col justify-center items-center bg-white">
          <p className="bg-transparent text-black font-semibold xl:text-5xl lg:text-3xl md:text-xl text-center p-12">
            Experience New Levels of Wellness
          </p>
          
          {/* Component Selection */}
          <div className="flex flex-row justify-between items-center gap-64">
            {['Wakeup Feeling Refreshed', 'Get Active', 'Stay Informed', 'Relax and Recover'].map(
              (label, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                  <button
                    className={`bg-transparent text-black font-bold text-xl p-2 ${
                      selectedComponent === index + 1}`}
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

        {/* <div className="h-[2px] w-5/6 bg-black mt-4" /> */}

          <div className="bg-transparent flex flex-row mt-20">
           
            <LvlsOfWellness media={mediaLinks[selectedComponent - 1]} />
          </div>
        </div>
      )}
    </>
  );
};

export default Page10;
