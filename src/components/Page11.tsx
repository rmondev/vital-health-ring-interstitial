import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'


const Page11 = () => {

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

    <div className='relative'>
        <div className='flex flex-col justify-center items-center p-8 bg-white'>
            <p className='text-black text-3xl font-semibold bg-white text-center'>Beyond the Ordinary</p>
            <p className='text-black text-2xl bg-white text-center'>The health tracker that out-smarts the rest.</p>
            </div>

            {/* Table Container */}

            <div className='flex flex-col bg-white justify-center items-center'>
            <table className='w-5/6 border-collapse rounded-2xl overflow-hidden mb-5' border={1} cellPadding={5} cellSpacing={2}>
                <thead>
                    <tr>
                        <th className='bg-gray-900'></th>
                        <th className='bg-gray-800 text-center'>
                            <Image src='/assets/page11/product.png' alt='Ring' width={200} height={200} className="mx-auto block"/>
                        </th>
                        <th className='bg-gray-700 text-center'>
                            <Image src='/assets/page11/competitor1.png' alt='Ring' width={125} height={125} className="mx-auto block"/>
                        </th>
                        {/* <th className='bg-gray-600 text-center'>
                            <Image src='/assets/page11/competitor2.png' alt='Ring' width={125} height={125} className="mx-auto block"/>
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-white text-center sm:text-xl font-bold bg-gray-500'>Criteria</td>
                        <td className='text-white text-center sm:text-xl font-semibold bg-slate-400'>Vital Health Ring</td>
                        <td className='text-black text-center sm:text-xl font-semibold bg-gray-300'>Competitor 1</td>
                        {/* <td className='text-black text-center xl:text-2xl lg:text-xl md:text-2xl font-semibold bg-gray-200'>Competitor 2</td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center sm:text-lg'>Discreet Design</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center sm:text-lg'>Accurate Results</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/x.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-200'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center sm:text-lg'>Fast Charging Speed</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center sm:text-lg'>Battery Life</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-200'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center sm:text-lg'>Water Resistance</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center sm:text-lg'>In-app Data Analysis</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-200'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center sm:text-lg'>Material and Comfort</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={25} height={25} className="mx-auto block"/></td>
                        {/* <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td> */}
                    </tr>
                    
                </tbody>
                </table>

            {/* //Button Container */}
                <div className='flex justify-center items-center bg-white relative'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 justify-center items-center rounded-full w-full border-black border flex flex-row relative">
                    Save 50% Now!
                    {/* <div className='h-7 w-7 border border-black opacity-40 bg-slate-400 rounded-full ml-7 relative'/>
                    <div className='absolute text-white top-1/2 left-auto right-10 transform -translate-y-1/2 translate-x-1/2'>{'->'}</div> */}
                    </button>
                </div>



            {/* //Button Footer Container */}
                <div className='flex justify-center items-center bg-white w-full pt-2 pl-3 pr-3 pb-4'>
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
    ) : (
      
    // Desktop View
    
    <div className='relative'>
        <div className='flex flex-col justify-center items-center p-8 bg-slate-100'>
            <p className='text-black text-5xl font-semibold bg-transparent text-center'>Beyond the Ordinary</p>
            <p className='text-black text-2xl bg-transparent text-center'>The health tracker that out-smarts the rest.</p>

            {/* Table Container */}

            <div className='flex flex-col mt-10'>
            <table className='xl:w-[1800px] lg:w-[1200px] md:w-[1000px] border-collapse rounded-3xl overflow-hidden' border={1} cellPadding={5} cellSpacing={2}>
                <thead>
                    <tr>
                        <th className='bg-gray-900'></th>
                        <th className='bg-gray-800 text-center'>
                            <Image src='/assets/page11/product.png' alt='Ring' width={200} height={200} className="mx-auto block"/>
                        </th>
                        <th className='bg-gray-700 text-center'>
                            <Image src='/assets/page11/competitor1.png' alt='Ring' width={125} height={125} className="mx-auto block"/>
                        </th>
                        <th className='bg-gray-600 text-center'>
                            <Image src='/assets/page11/competitor2.png' alt='Ring' width={125} height={125} className="mx-auto block"/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-white text-center xl:text-4xl lg:text-3xl md:text-2xl font-bold bg-gray-500'>Criteria</td>
                        <td className='text-white text-center xl:text-2xl lg:text-xl md:text-2xl font-semibold bg-slate-400'>Vital Health Ring</td>
                        <td className='text-black text-center xl:text-2xl lg:text-xl md:text-2xl font-semibold bg-gray-300'>Competitor 1</td>
                        <td className='text-black text-center xl:text-2xl lg:text-xl md:text-2xl font-semibold bg-gray-200'>Competitor 2</td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>Discreet Design</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>Accurate Results</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-200'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>Fast Charging Speed</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>Battery Life</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-200'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>Water Resistance</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>In-app Data Analysis</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-200'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center xl:text-2xl lg:text-xl md:text-lg'>Material and Comfort</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    
                </tbody>
                </table>

                {/* //Button Container */}
                <div className='flex justify-center items-center bg-slate-100 relative pt-10'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8  justify-center  rounded-full xl:w-1/6 md:w-1/6 lg:w-1/4 border-black border flex flex-row relative">
                    Save 50% Now!
                    {/* <div className='h-7 w-7 border border-black opacity-40 bg-slate-400 rounded-full ml-7 relative'/>
                    <div className='absolute text-white top-1/2 left-auto right-10 transform -translate-y-1/2 translate-x-1/2'>{'->'}</div> */}
                    </button>
                </div>



                {/* //Button Footer Container */}
                <div className='flex justify-center items-center bg-slate-100 w-full pt-2 pl-3 pr-3'>
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
    </div>
   

   
    )}
  </>

    
  )
}

export default Page11
