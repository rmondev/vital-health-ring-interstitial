import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

const Page4 = () => {

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
        <div className='flex flex-col justify-center items-center bg-white p-4 pt-1'>
            <p className='text-black font-semibold text-xl text-center pt-2'>
                Your Holistic Wellness Companion
                </p>
            <p className='text-black text-lg text-center font-light pt-2'>
                Meet the future of health tracking in this sleek and sophisticated design.
                </p>
        </div>

        <div className='flex flex-col bg-white justify-center items-center pt-1'>
            <div className='flex flex-row relative rounded-xl h-[300px] w-[220px] border-3 border-gray-400 mb-20'>

            <Image
                src='/assets/page4/womanSml.png'
                alt='Ring'
                layout='responsive'
                width={300}
                height={480}
                className='w-full h-full object-cover ml-[-70px] mt-[8px]'
            />

            <div className='absolute h-40 w-36 ml-40 '>

                <Image
                    src='/assets/page4/sleepSml.png'
                    alt='Ring'
                    layout='responsive'
                    width={150}
                    height={240}
                    className='w-full h-full object-cover absolute ml-[-20px] mt-[10px]'
                />

                <Image
                    src='/assets/page4/sleepChartSml.png'
                    alt='Ring'
                    layout='responsive'
                    width={150}
                    height={240}
                    className='w-full h-full object-cover absolute ml-[-20px] mt-[144px]'
                />


            </div>
            </div>
                
            {/* <div className='absolute h-40 w-36 border ml-40 border-black'>

            </div> */}
            
            
        </div>

    </div>
    
   ):(

    <div className='relative'>
        <div className='flex flex-col justify-center items-center bg-white pb-8'>
            <p className='text-black text-center font-semibold xl:text-5xl lg:text-4xl md:text-3xl mt-8'>
                Your Holistic Wellness Companion
                </p>
            <p className='text-black text-center font-normal xl:text-3xl lg:text-2xl md:text-lg pt-2'>
                Meet the future of health tracking in this sleek and sophisticated design.
                </p>
        </div>
        <div className='flex flex-row w-full bg-white'>
            <div className='w-1/2 ml-14 mb-32'>
                <div className='relative flex flex-row justify-center items-center'>
                    
                    <div className='border-2 border-gray-400 h-[380px] rounded-xl w-[230px] '>
                        <div className='flex flex-row'>
                            <Image
                                src='/assets/page4/womanLrg.png'
                                alt='Ring'
                                layout='responsive'
                                width={300}
                                height={480}
                                className='w-full h-full object-cover ml-[-140px] mt-[20px]'
                            />
                            <div className='flex flex-col'>
                                <Image
                                    src='/assets/page4/sleepLrg.png'
                                    alt='Ring'
                                    layout='responsive'
                                    width={300}
                                    height={480}
                                    className='w-full h-full object-cover ml-[60px] mt-[30px]'
                                />
                                <Image
                                    src='/assets/page4/sleepChartLrg.png'
                                    alt='Ring'
                                    layout='responsive'
                                    width={300}
                                    height={480}
                                    className='w-full h-full object-cover ml-[60px] mt-[30px]'
                                />
                            
                            


                            </div>
                            {/* <div className='border-2 border-gray-400 h-[380px] rounded-xl w-[230px]'>
                                
                                </div> */}
                        </div>
                    </div>
                    

                </div>
                    {/* <div className='w-3/5 border border-black'>

                    </div> */}
            </div> 
             <div className='w-2/5 rounded-xl border-2 border-gray-400 pl-[-250px] mt-20 mr-48 h-[220px] justify-center items-center'>
              <p className='text-black font-semibold text-xl text-center pt-2'>Invest in the Energy you Need for Tomorrow</p>
              <p className='text-black text-center xl:text-lg lg:text-sm md:text-sm p-2'>By tracking sleep stages, including deep and REM sleep, it helps you identify sleep patterns and disturbances. With these insights, you can optimize your bedtime routine, create a more conducive sleep environment, and wake up feeling refreshed and energized.

              </p>
             </div>
        </div>
    </div>
    
   )}
   </>
  )
}

export default Page4
