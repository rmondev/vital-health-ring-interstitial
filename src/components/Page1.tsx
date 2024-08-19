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
          <div className='flex flex-col absolute w-full justify-start'>
            <div className='flex flex-row justify-center items-center'>
              <Image
                src="/assets/page1/stars.svg"
                alt="Logo"
                width={70}
                height={70}
                objectFit='contain'
                className='pt-0.5'
              />
              <p className='font-bold text-black text-sm pt-0.5 pl-1'>Rated Excellent Based on 2000+ Reviews</p>
            </div>
            {/* //Description Container */}
            <div className='flex flex-col space-y-2 w-3/5 justify-start p-4'>
              <p className='font-bold text-gray-900 text-2xl'>It&#39;s More Than Just a Ring:</p>
              <p className='italic font-semibold text-gray-800 text-xl'>It&#39;s Your Personal Guide to a Better, Longer Life</p>
              {/* //Product Image Container */}
              <div className='relative'>
                <div className='absolute -top-4 -ml-6 pb-4'> {/* Adjusted top and left positioning */}
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
            className="w-full h-full object-cover"
          />

          {/* //Features Container */}
          <div className='flex flex-col justify-center border-none'>
            <section className='flex flex-col gap-2 bg-white p-3 m-0 border-none'>
              <p className='text-black text-sm m-0'>• Records sleep duration for improved sleep quality.</p>
              <p className='text-black text-sm m-0'>• IP68 waterproof for worry-free wear during daily activities.</p>
              <p className='text-black text-sm m-0'>• Records distance, pace, duration, and calorie burn for fitness goals.</p>
              <p className='text-black text-sm m-0'>• Measures blood oxygen saturation efficiently for monitoring overall health.</p>
              <p className='text-black text-sm m-0'>• Tracks heart rate changes in real-time for insights into cardiovascular health.</p>
            </section>

          {/* //Button Container */}
          <div className='flex justify-center items-center bg-white relative'>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 justify-center items-center rounded-full w-3/5 border-black border flex flex-row relative">
              Save 50% Now!
              {/* <div className='h-7 w-7 border border-black opacity-40 bg-slate-400 rounded-full ml-7 relative'/>
              <div className='absolute text-white top-1/2 left-auto right-10 transform -translate-y-1/2 translate-x-1/2'>{'->'}</div> */}
            </button>
          </div>



            {/* //Button Footer Container */}
            <div className='flex justify-center items-center bg-white w-full pt-2'>
              <Image
                src="/assets/page1/greenDot.svg"
                alt="Secure"
                width={10}
                height={10}
                objectFit='contain'
                className='m-1.5'
              />
              <p className='text-black text-xs font-bold'>Ships by 22nd December |</p>
              <Image
                src="/assets/page1/hourGlass.png"
                alt="Secure"
                width={10}
                height={10}
                objectFit='contain'
                className='m-1'
              />
              <p className='text-black text-xs font-bold'>Stock: Only 58 Vital Health Rings Left!</p>

              
            </div>
            <div className='flex flex-col justify-center items-center bg-white'>
            <p className='text-black font-bold text-lg pt-2'>As Seen On</p>
            
            {/* //Publication Container */}
            <div className='flex rounded-full bg-white p-2 m-2 shadow-black shadow-2xl'>
              <Image
                src="/assets/page1/abc.png"
                alt="Forbes"
                width={55}
                height={30}
                objectFit='contain'
                className='m-0.5'
              />
              <Image
                src="/assets/page1/fox.png"
                alt="Forbes"
                width={60}
                height={40}
                objectFit='contain'
                className='m-0.5'
              />
              <Image
                src="/assets/page1/usaToday.png"
                alt="Forbes"
                width={55}
                height={45}
                objectFit='contain'
                className='m-0.5'
              />
              <Image
                src="/assets/page1/cbs.png"
                alt="Forbes"
                width={90}
                height={10}
                objectFit='contain'
                className='m-0.5 h-7 mt-3'
              />
              {/* <Image
                src="/assets/page1/digJournal.png"
                alt="Forbes"
                width={50}
                height={40}
                objectFit='contain'
                className='m-0.5'
              /> */}
              {/* <Image
                src="/assets/page1/Today 1.png"
                alt="Forbes"
                width={50}
                height={40}
                objectFit='contain'
                className='m-0.5'
              /> */}
              {/* <Image
                src="/assets/page1/NBC.png"
                alt="Forbes"
                width={50}
                height={40}
                objectFit='contain'
                className='m-0.5'
              /> */}
            </div>
            </div>

            

          </div>
        </div>
      ) : (
        <div className='relative '>
          <div className='flex flex-col absolute w-full justify-start p-8'>
            
            {/* <div className='flex flex-col justify-center items-center bg-transparent'> */}

            <div className='flex flex-row justify-center items-center bg-transparent'>
            <div className='flex flex-row justify-between pb-12'>

              {/* // Product Info Container */}
              
              <div className='flex flex-col w-2/5 bg-transparent'>
              

                {/* //Rating Container */}
                <div className='flex flex-row justify-center gap-2 items-center bg-transparent'>
                  <Image
                    src="/assets/page1/stars.svg"
                    alt="Logo"
                    width={70}
                    height={70}
                    objectFit='contain'
                    className='pt-0.5 xl:h-100 xl:w-100 lg:h-100 lg:w-100 md:h-100 md:w-100'
                  />
                  <p className='font-bold text-black xl:text-xl lg:text:lg md:text-sm pt-0.5 pl-1'>Rated Excellent Based on 2000+ Reviews</p>
                  </div>
                {/* //Description Container */}
                <div className='flex flex-col space-y-2 w-full justify-start xl:p-4 lg:p-3 md:p-2 bg-transparent'>
                  <p className='font-bold text-gray-900 xl:text-5xl lg:text-4xl md:text-3xl'>It&#39;s More Than Just a Ring:</p>
                  <p className='italic font-semibold text-gray-800 xl:text-5xl lg:text-4xl md:text-3xl'>It&#39;s Your Personal Guide to a Better, Longer Life</p>
                </div>
                {/* //Features Container */}
                <section className='flex flex-col gap-2 bg-white xl:p-3 lg:p-2 md:p-1 border-none bg-transparent'>
                  <p className='text-black xl:text-xl lg:text-lg md:text-sm'>• Records sleep duration for improved sleep quality.</p>
                  <p className='text-black xl:text-xl lg:text-lg md:text-sm'>• IP68 waterproof for worry-free wear during daily activities.</p>
                  <p className='text-black xl:text-xl lg:text-lg md:text-sm'>• Records distance, pace, duration, and calorie burn for fitness goals.</p>
                  <p className='text-black xl:text-xl lg:text-lg md:text-sm'>• Measures blood oxygen saturation efficiently for monitoring overall health.</p>
                  <p className='text-black xl:text-xl lg:text-lg md:text-sm'>• Tracks heart rate changes in real-time for insights into cardiovascular health.</p>
                </section>
                
                
                {/* //Button Section Container */}

                <div className='flex flex-col justify-center items-center bg-white relative bg-transparent xl:p-8 lg:p-6 md:p-4'>
                 
                {/* //Button Container */}
                <div className='flex justify-center items-center bg-white relative bg-transparent w-full'>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 justify-center items-center rounded-full w-3/5 border-black border flex flex-row relative">
                    Save 50% Now!
                  </button>
                  </div>
                {/* //Button Footer Container */}
                <div className='flex justify-center items-center bg-white w-full pt-2 bg-transparent'>
                  <Image
                    src="/assets/page1/greenDot.svg"
                    alt="Secure"
                    width={10}
                    height={10}
                    objectFit='contain'
                    className='m-1.5'
                  />
                  <p className='text-black text-xs font-bold'>Ships by 22nd December |</p>
                  <Image
                    src="/assets/page1/hourGlass.png"
                    alt="Secure"
                    width={10}
                    height={10}
                    objectFit='contain'
                    className='m-1'
                  />
                  <p className='text-black text-xs font-bold'>Stock: Only 58 Vital Health Rings Left!</p>
                  </div>

                  </div>
              </div>

              
              {/* //Product Image Container */}
              <div className='flex flex-col w-3/5 pr-20 pt-28'>
                <Image
                  src="/assets/page1/product.png"
                  alt="Logo"
                  width={480}
                  height={480}
                  objectFit='object-cover'
                />

              </div>

            
                
            
            </div>
            
    


                
            </div>



            {/* //Publication Container */}
            <div className='flex rounded-full justify-between items-center bg-white pl-20 pr-20 py-4 shadow-black shadow-2xl'>
              <p className='text-black text-xl font-bold'>
                As Seen On
              </p>
              <Image
                src="/assets/page1/abc.png"
                alt="Forbes"
                width={55}
                height={30}
                objectFit='contain'
                
              />
              <Image
                src="/assets/page1/fox.png"
                alt="Forbes"
                width={60}
                height={40}
                objectFit='contain'
                
              />
              <Image
                src="/assets/page1/usaToday.png"
                alt="Forbes"
                width={55}
                height={45}
                objectFit='contain'
                
              />
              <Image
                src="/assets/page1/cbs.png"
                alt="Forbes"
                width={90}
                height={10}
                objectFit='contain'
                
              />
              <Image
                src="/assets/page1/digJournal.png"
                alt="Forbes"
                width={50}
                height={40}
                objectFit='contain'
                
              />
              <Image
                src="/assets/page1/Today 1.png"
                alt="Forbes"
                width={50}
                height={40}
                objectFit='contain'
                
              />
              <Image
                src="/assets/page1/NBC.png"
                alt="Forbes"
                width={50}
                height={40}
                objectFit='contain'
                
              />
            </div>
            
            </div>
          

            <div className='bg-white h-40 pb-10'/>
            
            <Image
              src="/assets/page1/backgroundLrg.png"
              alt="Page 1"
              layout="responsive"
              width={960}
              height={108}
              className="w-full h-full object-cover"
            />
            
         
        </div>
      )}
    </>
  );
};

export default Page1;
