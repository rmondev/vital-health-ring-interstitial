import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

const Page2 = () => {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <>
      {isSmallScreen ? (
        <Image
          src="/assets/page2/backgroundSml.png"
          alt="Page 1 Small"
          layout="responsive"
          width={320}
          height={180}
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src="/assets/page2/backgroundLrg.png"
          alt="Page 1"
          layout="responsive"
          width={960}
          height={108}
          className="w-full h-full object-cover"
        />
      )}
    </>
  )
}

export default Page2
