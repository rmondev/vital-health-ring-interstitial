import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const ImageSection = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })

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
            <p className='text-black font-semibold text-5xl bg-transparent mt-44 pb-2'>
              Find us on TikTok Shop!
              </p>
            <p className='text-black text-3xl bg-transparent text-center'>
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

const Page3 = () => {
  return (
    <ImageSection />
  )
}

export default Page3