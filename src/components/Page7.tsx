import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

const Page7 = () => {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' })
  return (
   <>
   {isSmallScreen ? (
    <div className='relative'>
    <div className='flex flex-col justify-center items-center bg-white p-4'>
        <p className='text-black font-semibold text-xl text-center pt-2'>
            Your Body Speaks Volumes
            </p>
        <p className='text-black text-lg text-center font-light pt-2'>
            Understand your stress levels by tracking heart rate variability to identify patterns and triggers. Implement stress-reducing techniques to enhance your mental health and overall well-being.
            </p>
    </div>

    <div className='flex flex-col bg-white justify-center items-center'>
        <div className='flex flex-row relative rounded-xl h-[300px] w-[220px] border-3 border-gray-400 mb-20'>

        <Image
            src='/assets/page6/manSml.png'
            alt='Ring'
            layout='responsive'
            width={300}
            height={480}
            className='w-full h-full object-cover ml-[-70px] mt-[8px]'
        />

        <div className='absolute h-40 w-36 ml-40 '>

            <Image
                src='/assets/page6/heartSml.png'
                alt='Ring'
                layout='responsive'
                width={150}
                height={240}
                className='w-full h-full object-cover absolute ml-[-20px] mt-[10px]'
            />

            <Image
                src='/assets/page6/heartChartSml.png'
                alt='Ring'
                layout='responsive'
                width={150}
                height={240}
                className='w-full h-full object-cover absolute ml-[-20px] mt-[144px]'
            />


        </div>
        </div>
    </div>
</div>
   ):(

    <div className='relative'>
        <div className='flex flex-row w-full bg-white'>
            <div className='w-1/2 ml-14 mb-32'>
                <div className='relative flex flex-row justify-center items-center'>
                    <div className='w-4/5 rounded-xl border-2 border-gray-400 pl-[-250px] mt-20 mr-30 h-[220px] justify-center items-center'>
                        <p className='text-black font-semibold text-xl text-center pt-2'>
                            Learn Your Monthly Patterns                      </p>
                        <p className='text-black text-center xl:text-lg lg:text-sm md:text-sm p-2'>
                            For women, understanding and tracking menstrual cycle is crucial. The Vital Health Ring can help monitor cycle patterns, ovulation, and other reproductive health indicators. Gain insights into your body&#39;s natural rhythms to optimize comfortability and minimize pain.
                        </p>
                    </div>
                    {/* <div className='border-2 border-gray-400 h-[380px] rounded-xl w-[230px] '>
                        <div className='flex flex-row'>
                            <Image
                                src='/assets/page6/manLrg.png'
                                alt='Ring'
                                layout='responsive'
                                width={300}
                                height={480}
                                className='w-full h-full object-cover ml-[-140px] mt-[20px]'
                            />
                            <div className='flex flex-col'>
                                <Image
                                    src='/assets/page6/heartLrg.png'
                                    alt='Ring'
                                    layout='responsive'
                                    width={300}
                                    height={480}
                                    className='w-full h-full object-cover ml-[60px] mt-[30px]'
                                />
                                <Image
                                    src='/assets/page6/heartChartLrg.png'
                                    alt='Ring'
                                    layout='responsive'
                                    width={300}
                                    height={480}
                                    className='w-full h-full object-cover ml-[60px] mt-[30px]'
                                /> 
                            </div>
                        </div>
                    </div> */}
                </div>
            </div> 
             {/* <div className='w-2/5 rounded-xl border-2 border-gray-400 pl-[-250px] mt-20 mr-48 h-[220px] justify-center items-center'>
                <p className='text-black font-semibold text-xl text-center pt-2'>
                    Your Body Speaks Volumes
                </p>
                <p className='text-black text-center xl:text-lg lg:text-sm md:text-sm p-2'>
                    Understand your stress levels by tracking heart rate variability to identify patterns and triggers. Implement stress-reducing techniques to enhance your mental health and overall well-being.
                </p>
             </div> */}

                  <div className='border-2 border-gray-400 h-[380px] rounded-xl w-[230px] -ml-[-310px]'>
                        <div className='flex flex-row'>
                            <Image
                                src='/assets/page7/womanLrg.png'
                                alt='Ring'
                                layout='responsive'
                                width={300}
                                height={480}
                                className='w-full h-full object-cover ml-[-140px] mt-[20px]'
                            />
                            <div className='flex flex-col'>
                                <Image
                                    src='/assets/page7/cycleLrg.png'
                                    alt='Ring'
                                    layout='responsive'
                                    width={300}
                                    height={480}
                                    className='w-full h-full object-cover ml-[60px] mt-[30px]'
                                />
                                <Image
                                    src='/assets/page7/cycleChartLrg.png'
                                    alt='Ring'
                                    layout='responsive'
                                    width={300}
                                    height={480}
                                    className='w-full h-full object-cover ml-[60px] mt-[30px]'
                                /> 
                            </div>
                        </div>
                    </div>
        </div>
    </div>
    
   )}
   </>
  )
}

export default Page7
