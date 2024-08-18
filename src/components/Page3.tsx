import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const ImageSection = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <>
      {isSmallScreen ? (
        <div className='relative'>
          <div className='flex flex-col'>
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
       </div>
        
      ) : (
        <Image
          src="/assets/page3/background.png"
          alt="Page 2"
          layout="responsive"
          width={960}
          height={108}
          className="w-full h-full object-cover"
        />
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