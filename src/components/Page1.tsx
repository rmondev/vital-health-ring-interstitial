"use client";
import React from 'react';
import Image from 'next/image';

const Reviews = () => (
  <div className='flex space-x-2 w-full'>
    <Image
      src="/assets/page1/stars.svg"
      alt="Logo"
      width={90}
      height={90}
      objectFit='contain'
    />
    <p className='font-bold text-black'>Rated Excellent Based on 2000+ Reviews</p>
  </div>
);

const Features = () => (
  <section className='flex flex-col space-y-4'>
    <p className='text-black text-sm'>• Records sleep duration for improved sleep quality.</p>
    <p className='text-black text-sm'>• IP68 waterproof for worry-free wear during daily activities.</p>
    <p className='text-black text-sm'>• Records distance, pace, duration, and calorie burn for fitness goals.</p>
    <p className='text-black text-sm'>• Measures blood oxygen saturation efficiently for monitoring overall health.</p>
    <p className='text-black text-sm'>• Tracks heart rate changes in real-time for insights into cardiovascular health.</p>
  </section>
);

const Description = () => (
  <div className='flex flex-col space-y-4'>
    <p className='font-bold text-black sm:text-lg md:text-xl lg:text-3xl xl:text-4xl'>It's More Than Just a Ring:</p>
    <p className='italic text-black sm:text-lg md:text-xl lg:text-3xl xl:text-4xl'>Your Personal Guide to a Better, Longer Life</p>
    <Features />
  </div>
);

const ImageSection = () => (
  <div className="w-full h-full">
    <Image
      src="/assets/page1/manRunning2.png"
      alt="Page 1"
      width={960}
      height={108}
      className="w-full h-full" // Ensures the image scales with the screen size
    />
  </div>
);

const Save50Button = () => (
  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
    Save 50% Now!
  </button>
);

function Page1() {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-between bg-white">
      <div className="flex w-2/5 flex-col pl-8 gap-2">
        <Reviews />
        <Description />
        <Save50Button />
      </div>
      <ImageSection />
    </div>
  );
}

export default Page1;