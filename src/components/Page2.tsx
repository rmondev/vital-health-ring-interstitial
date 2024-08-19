import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

const Page2 = () => {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })

  return (
    <>
      {isSmallScreen ? (

        // Mobile View
        <div className='relative'>
          <div className='flex flex-col absolute justify-center items-center w-full mt-48 p-4'>
            <div className='mt-10'>
              <p className='text-black font-semibold text-xl text-center'>
                Understand Your Body&rsquo;s Language
                </p>
              <p className='text-black text-xs text-center pt-2'>
                Sleek, stylish, and packed with cutting-edge technology, this smart ring discreetly tracks your vital signs, helping you live a longer and healthier life.
              </p>
              <p className='text-black text-xs text-center pt-2'>
              From tracking your workouts to monitoring your sleep quality, the Vital Health Ring empowers you to make informed decisions about your health. Stay motivated,
              improve your fitness, and achieve better sleep &ndash; all with the simple touch of a finger.
              </p>
            </div>
            
          </div>
          

          <Image
            src="/assets/page2/backgroundSml.png"
            alt="Page 1 Small"
            layout="responsive"
            width={320}
            height={180}
            className="w-full h-full object-cover"
          />
          <div className='bg-white h-40'/>
            
      
        </div>
      ) : (
        
        // Desktop View
        <div className='relative'>

          <div className='flex flex-col absolute justify-center items-center w-full mt-96 xl:pt-32 lg:pt-16 md:pt-6'>
          {/* <div className='bg-transparent h-40'/> */}
            <p className='text-black font-semibold xl:text-5xl lg:text-3xl md:text-2xl pt-28'>
              Understand Your Body&rsquo;s Language
              </p>
            <p className='text-black xl:text-3xl lg:text-2xl md:text-xl text-center pl-20 pr-20 xl:pt-6 lg:pt-4 md:pt-2'>
              Sleek, stylish, and packed with cutting-edge technology, this smart ring discreetly tracks your vital signs, helping you live a longer and healthier life.
            </p>
            <p className='text-black xl:text-3xl lg:text-2xl md:text-xl text-center pt-6 pl-20 pr-20'>
            From tracking your workouts to monitoring your sleep quality, the Vital Health Ring empowers you to make informed decisions about your health. Stay motivated,
            improve your fitness, and achieve better sleep &ndash; all with the simple touch of a finger.
            </p>
          </div>

        <Image
          src="/assets/page2/backgroundLrg.png"
          alt="Page 1"
          layout="responsive"
          width={960}
          height={108}
          className="w-full h-full object-cover"
        />
        <div className='bg-white h-40'/>
        <div className='bg-white h-40'/>

        </div>
      )}
    </>
  )
}

export default Page2