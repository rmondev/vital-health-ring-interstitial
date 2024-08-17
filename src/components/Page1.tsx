import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

const Page1 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  if (!isClient) {
    return null; // Prevent rendering until we know we're on the client
  }

  return (
    <>
      {isSmallScreen ? (
        //Mobile View
        <div className='relative'>
          {/* // Rating Container */}
          <div className='flex flex-col absolute w-full justify-start m-0 p-0'>
            <div className='flex flex-row justify-center m-0 p-0'>
              <Image
                src="/assets/page1/stars.svg"
                alt="Logo"
                width={70}
                height={70}
                objectFit='contain'
              />
              <p className='font-bold text-black text-xs p-1'>Rated Excellent Based on 2000+ Reviews</p>
            </div>
            {/* //Description Container */}
            <div className='flex flex-col space-y-2 w-1/2 justify-start pt-4 m-0 p-0'>
              <p className='font-bold text-gray-800 text-2xl'>It's More Than Just a Ring:</p>
              <p className='italic font-semibold text-gray-800 text-xl'>It's Your Personal Guide to a Better, Longer Life</p>
              {/* //Product Image Container */}
              <div className='relative m-0 p-0'>
                <div className='absolute -top-8 -ml-6'> {/* Adjusted top and left positioning */}
                  <Image
                    src="/assets/page1/product.png"
                    alt="Logo"
                    width={240}
                    height={240}
                    objectFit='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/page1/backgroundSml.png"
            alt="Page 1 Small"
            layout="responsive"
            width={320}
            height={180}
            className="w-full h-full object-cover m-0 p-0"
          />

          {/* //Features Container */}
          <div className='flex flex-col justify-center m-0 p-0 border-none'>
            <section className='flex flex-col space-y-2 bg-white p-4 m-0 border-none'>
              <p className='text-black text-sm m-0'>• Records sleep duration for improved sleep quality.</p>
              <p className='text-black text-sm m-0'>• IP68 waterproof for worry-free wear during daily activities.</p>
              <p className='text-black text-sm m-0'>• Records distance, pace, duration, and calorie burn for fitness goals.</p>
              <p className='text-black text-sm m-0'>• Measures blood oxygen saturation efficiently for monitoring overall health.</p>
              <p className='text-black text-sm m-0'>• Tracks heart rate changes in real-time for insights into cardiovascular health.</p>
            </section>

            {/* //Button Container */}
            <div className='flex justify-center items-center bg-white m-0 p-0 border-none'>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full w-1/2 border-black border">
                Save 50% Now!
              </button>
            </div>

            {/* //Button Footer Container */}
            <div className='flex justify-center items-center bg-white'>
              <Image
                src="/assets/page1/greenDot.svg"
                alt="Secure"
                width={5}
                height={5}
                objectFit='contain'
                className='m-0.5'
              />
              <p className='text-black text-xs'>Ships by 22nd December |</p>
              <Image
                src="/assets/page1/hourGlass.png"
                alt="Secure"
                width={5}
                height={5}
                objectFit='contain'
                className='m-0.5'
              />
              <p className='text-black text-xs'>Stock: Only 58 Vital Health Rings Left!</p>
            </div>


          </div>
        </div>
      ) : (
        <Image
          src="/assets/page1/backgroundLrg.png"
          alt="Page 1"
          layout="responsive"
          width={960}
          height={108}
          className="w-full h-full object-cover"
        />
      )}
    </>
  );
};

export default Page1;
