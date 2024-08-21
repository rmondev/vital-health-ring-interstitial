import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import Review from './Review'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page12 = () => {

    const [isClient, setIsClient] = useState(false);


    const reviewData = [
        {
            id: 1,
            reviewTitle: 'It exceeded all my expectations!',
            reviewerName: 'Linda C.',
            reviewContent: `"Measurements are accurate. Even though it had instructions, they weren't needed. Even with a smart watch, I have a feeling that now I have this ring, it will probably start being my main source of tracking, over the watch."`,
            reviewPic:'/assets/page12/review1.png',
            avatar:'/assets/page12/avatar1.png'
          },
        {
            id: 2,
            reviewTitle: 'A 5-star product indeed!',
            reviewerName: 'Jack P.',
            reviewContent: `"This ring works great! Now I keep a daily record of my main health indicators. Battery lasts several days. The only issue is that I can't buy another magnet charger."`,
            reviewPic:'/assets/page12/review2.png',
            avatar:'/assets/page12/avatar2.png'
          },
        {
            id: 3,
            reviewTitle: `I'm thoroughly impressed with this Health Ring!`,
            reviewerName: 'Pam A.',
            reviewContent: `"This has been a great item so far for tracking sleep, steps, stress, heart rate and other stuff. It's very easy to set up, long battery life and charging takes no time at all."`,
            reviewPic:'/assets/page12/review3.png',
            avatar:'/assets/page12/avatar3.png'
        },
    ]

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  
    if (!isClient) {
      // Return a loading state or the server-compatible version of the HTML
      return <div className="h-screen">Loading...</div>;
    }

    const settings = {
      arrows: true,
      //fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
    };

  return (
   <>
   {isSmallScreen ? (
    <div className='relative'>
        <div className="flex flex-col justify-center items-center p-2 bg-white">
            <p className='text-black bg-white text-xl text-center font-bold p-2'>Why Choose Vital Ring?</p>
        <div className="w-full p-1 bg-white">
        <Slider {...settings}>
        {reviewData.map((review, index) => (
                <div className='flex w-full' key={index}>
                  <Review review={review} />
                </div>
        ))}
        </Slider>
        </div>

        {/* //Button Container */}
        <div className='flex justify-center items-center bg-white relative pb-2'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 justify-center items-center rounded-full w-full border-black border flex flex-row relative">
                    Save 50% Now!
                    {/* <div className='h-7 w-7 border border-black opacity-40 bg-slate-400 rounded-full ml-7 relative'/>
                    <div className='absolute text-white top-1/2 left-auto right-10 transform -translate-y-1/2 translate-x-1/2'>{'->'}</div> */}
                    </button>
                </div>



            {/* //Button Footer Container */}
                <div className='flex justify-center items-center bg-white w-full'>
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
   ):(
    <div className='relative'>
        <div className='flex flex-col justify-center items-center p-8 bg-white'>
            <p className='text-black text-5xl font-semibold bg-transparent text-center'>Why Choose Vital Health Ring?</p>
        </div>

        {/* Reviews Container */}
        <div className='flex flex-row justify-center items-center bg-white'>
            {/* Map through the reviewData array and pass the review object to the Review component */}
            {reviewData.map((review, index) => (
                <div className='flex' key={index}>
                  <Review review={review} />
                </div>
            ))}
          </div>

        {/* //Button Container */}
        <div className='flex justify-center items-center bg-white relative'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 justify-center items-center rounded-full xl:w-1/5 border-black border flex flex-row relative">
                    Save 50% Now!
                    {/* <div className='h-7 w-7 border border-black opacity-40 bg-slate-400 rounded-full ml-7 relative'/>
                    <div className='absolute text-white top-1/2 left-auto right-10 transform -translate-y-1/2 translate-x-1/2'>{'->'}</div> */}
                    </button>
                </div>



            {/* //Button Footer Container */}
                <div className='flex justify-center items-center bg-white w-full pt-2 pl-3 pr-3'>
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
   )}
   </>
  )
}

export default Page12
