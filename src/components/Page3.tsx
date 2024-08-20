import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const Page3 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  if (!isClient) {
    // Return a loading state or the server-compatible version of the HTML
    return <div className="h-screen">Loading...</div>;
  }

  return (
    <>
      {isSmallScreen ? (
        <div className='relative'>
          <div className='flex flex-col absolute justify-center items-center w-full z-10 pr-10 pl-10 pt-7'>
            
              <p className='text-black font-semibold text-lg bg-transparent mt-44 pb-2'>
                Find us on TikTok Shop!
                </p>
              <p className='text-black text-sm bg-transparent text-center'>
                By combining style, comfort, accuracy, and a comprehensive approach to health, the Vital Health Ring offers a superior experience compared to other health trackers on the market.
              </p>
            
          </div>

          <Image
            src="/assets/page3/backgroundSml1.png"
            alt="Page 2 Small"
            layout="responsive"
            width={320}
            height={180}
            className="w-full h-full object-cover"
          />

          <Image
            src="/assets/page3/backgroundSml2.png"
            alt="Page 2 Small"
            layout="responsive"
            width={320}
            height={180}
            className="w-full h-full object-cover"
            />
       </div>
        
      ) : (

        <div className='relative'>
          <div className='flex flex-col absolute justify-center items-center w-1/2 mt-28 ml-12'>
            <p className='text-black font-semibold xl:text-5xl lg:text-4xl md:text-3xl bg-transparent xl:mt-44 lg:mt-16 md:mt-8 pb-2 xl:pt-4'>
              Find us on TikTok Shop!
              </p>
            <p className='text-black xl:text-2xl lg:text-xl md:text-sm bg-transparent text-center leading-relaxed'>
              By combining style, comfort, accuracy, and a comprehensive approach to health, the Vital Health Ring offers a superior experience compared to other health trackers on the market.
              </p>
            </div>
            <Image
              src="/assets/page3/background.png"
              alt="Page 2"
              layout="responsive"
              width={960}
              height={108}
              className="w-full h-full object-cover"
            />
        </div>
      )}
    </>
  )
}



export default Page3