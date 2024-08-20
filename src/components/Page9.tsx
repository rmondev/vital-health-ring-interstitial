import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'


const Page9 = () => {

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

    // Mobile View
    <div className='flex flex-col justify-center items-center bg-zinc-900'>
        <p className='bg-transparent text-white font-bold text-2xl text-center mt-4'>
            How To Use
        </p>

        {/* Step 1 Video Section */}
        <div className='flex'> 
            <div className='flex rounded-lg p-2 bg-zinc-700 justify-center items-center m-6'>
                <div className='absolute rounded-full h-[56px] w-[56px] bg-gray-500 mb-[160px] ml-[310px] z-10'>
                        <p className='text-white font-light bg-transparent text-center text-3xl pt-[5px]'>
                            01
                        </p>
                    </div>
                <video width="600" controls preload="none">
                    <source src="/videos/VitalStep1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>  
            </div>
        </div>

        <div className='flex flex-col justify-center space-y-4 m-4'>
            <div className='flex justify-start'>
                <p className='text-white font-semibold text-2xl'>
                    Getting Started
                </p>
            </div>
            <p className='text-white font-light text-lg'>  
                • <span className='font-bold'>Charge Your Ring: </span>Place the ring on the included charging dock. A full charge typically takes 2 hours.
            </p>
            <p className='text-white font-light text-lg'>  
                • <span className='font-bold'>Download the App: </span>Search for the Vital Health Ring app in the App Store or Google Play Store.
            </p>
            <p className='text-white font-light text-lg'>  
                • <span className='font-bold'>Pair Your Ring: </span>Open the app and follow the on-screen instructions to pair your Vital Health Ring.
            </p>
        </div>

        {/* Step 2 Video Section */}
        <div className='flex'> 
            <div className='flex rounded-lg p-2 bg-zinc-700 justify-center items-center m-6'>
                <div className='absolute rounded-full h-[56px] w-[56px] bg-gray-500 mb-[160px] ml-[310px] z-10'>
                        <p className='text-white font-light bg-transparent text-center text-3xl pt-[5px]'>
                            02
                        </p>
                    </div>
                <video width="600" controls preload="none">
                    <source src="/videos/VitalStep2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>  
            </div>
        </div>

        <div className='flex flex-col justify-center space-y-4 m-4'>
            <div className='flex justify-start'>
                <p className='text-white font-semibold text-2xl'>
                    Wearing Your Ring
                </p>
            </div>
            <p className='text-white font-light text-lg'>  
                • For optimal accuracy, wear the ring on your non-dominant hand.
            </p>
            <p className='text-white font-light text-lg'>  
                • Ensure a snug fit but not too tight.
            </p>
            <p className='text-white font-light text-lg'>  
                • Wear your ring consistently for accurate data.
            </p>
        </div>

        {/* Step 3 Video Section */}
        <div className='flex'> 
            <div className='flex rounded-lg p-2 bg-zinc-700 justify-center items-center m-6'>
                <div className='absolute rounded-full h-[56px] w-[56px] bg-gray-500 mb-[160px] ml-[310px] z-10'>
                        <p className='text-white font-light bg-transparent text-center text-3xl pt-[5px]'>
                            03
                        </p>
                    </div>
                <video width="600" controls preload="none">
                    <source src="/videos/VitalStep3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>  
            </div>
        </div>

        <div className='flex flex-col justify-center space-y-4 m-4'>
            <div className='flex justify-start'>
                <p className='text-white font-semibold text-2xl'>
                    The App
                </p>
            </div>
            <p className='text-white font-light text-lg'>  
                • <span className='font-bold'>Dashboard: </span>View your daily, weekly, and monthly health summaries.
            </p>
            <p className='text-white font-light text-lg'>  
                • <span className='font-bold'>Share: </span>Share your data with other Vital Health Ring users and health care professionals.
            </p>
        
        
        </div>
    </div>      
    ) : (
      
    // Desktop View
    
    <div className='flex flex-col justify-center items-center bg-zinc-900'>
        <p className='bg-transparent text-white font-semibold xl:text-5xl lg:text-3xl md:text-xl text-center p-5'>
        How To Use
        </p>

        {/* Step 1 Video Section */}
        <div className='flex flex-row w-full bg-transparent'>
            <div className='flex flex-col w-2/5'>
                <div className='flex'>
                    <div className='flex rounded-lg p-2 bg-zinc-700 justify-end m-20'>
                        <div className='absolute rounded-full h-[56px] w-[56px] bg-gray-500 mt-[-20px] mr-[-20px] z-10'>
                            <p className='text-white font-light bg-transparent text-center text-3xl pt-[5px]'>
                                01
                            </p>
                        </div>
                        <video width="600" controls preload="none">
                            <source src="/videos/VitalStep1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>  
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-1/2 space-y-4 -m-[16px]'>
                <p className='text-white font-semibold text-3xl pt-24'>
                    Getting Started
                </p>
                <p className='text-white font-light text-xl'>  
                    • <span className='font-bold'>Charge Your Ring: </span>Place the ring on the included charging dock. A full charge typically takes 2 hours.
                </p>
                <p className='text-white font-light text-xl'>  
                    • <span className='font-bold'>Download the App: </span>Search for the Vital Health Ring app in the App Store or Google Play Store.
                </p>
                <p className='text-white font-light text-xl'>  
                    • <span className='font-bold'>Pair Your Ring: </span>Open the app and follow the on-screen instructions to pair your Vital Health Ring.
                </p>
            </div>
        </div>

        {/* Step 2 Video Section */}
        <div className='flex flex-row w-full bg-transparent pt-20'>
            <div className='flex flex-col w-1/2 space-y-4 m-20'>
                <p className='text-white font-semibold text-3xl pt-24'>
                Wearing Your Ring
                </p>
                <p className='text-white font-light text-xl'>  
                    • For optimal accuracy, wear the ring on your non-dominant hand.
                </p>
                <p className='text-white font-light text-xl'>  
                    • Ensure a snug fit but not too tight.
                </p>
                <p className='text-white font-light text-xl'>  
                    • Wear your ring consistently for accurate data.
                </p>
            </div>

            <div className='flex flex-col w-2/5'>
                <div className='flex'>
                    <div className='flex rounded-lg p-2 bg-zinc-700 justify-end m-20'>
                        <div className='absolute rounded-full h-[56px] w-[56px] bg-gray-500 mt-[-20px] mr-[-20px] z-10'>
                            <p className='text-white font-light bg-transparent text-center text-3xl pt-[5px]'>
                                02
                            </p>
                        </div>
                        <video width="600" controls preload="none">
                            <source src="/videos/VitalStep2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>  
                    </div>
                </div>
            </div>
        </div>

        {/* Step 3 Video Section */}
        <div className='flex flex-row w-full bg-transparent'>
            <div className='flex flex-col w-2/5'>
                <div className='flex'>
                        <div className='flex rounded-lg p-2 bg-zinc-700 justify-end m-20'>
                            <div className='absolute rounded-full h-[56px] w-[56px] bg-gray-500 mt-[-20px] mr-[-20px] z-10'>
                                <p className='text-white font-light bg-transparent text-center text-3xl pt-[5px]'>
                                    03
                                </p>
                            </div>
                            <video width="600" controls preload="none">
                                <source src="/videos/VitalStep3.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>  
                        </div>
                    </div>
                </div>
            <div className='flex flex-col w-1/2 space-y-4 -m-[16px]'>
                <p className='text-white font-semibold text-3xl pt-24'>
                    The App
                </p>
                <p className='text-white font-light text-xl'>  
                    • <span className='font-bold'>Dashboard: </span>View your daily, weekly, and monthly health summaries.
                </p>
                <p className='text-white font-light text-xl'>  
                    • <span className='font-bold'>Share: </span>Share your data with other Vital Health Ring users and health care professionals.
                </p>
                
            </div>
        </div>



    </div>

   
    )}
  </>

    
  )
}

export default Page9
