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
        <p>Small Screen</p>
        </div>
    ) : (
      
    // Desktop View
    
    <div className='relative'>
        <div className='flex flex-col justify-center items-center p-8 bg-slate-100'>
            <p className='text-black text-5xl font-semibold bg-transparent'>Beyond the Ordinary</p>
            <p className='text-black text-2xl bg-transparent'>The health tracker that out-smarts the rest.</p>

            {/* Table Container */}

            <div className='flex mt-10'>
            <table className='xl:w-[1200px] lg:w-[600px] md:w-[200px] border-collapse rounded-3xl overflow-hidden' border={1} cellPadding={15} cellSpacing={2}>
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
                        <td className='text-white text-center text-4xl font-bold bg-gray-500'>Criteria</td>
                        <td className='text-white text-center text-2xl font-semibold bg-slate-400'>Vital Health Ring</td>
                        <td className='text-black text-center text-2xl font-semibold bg-gray-300'>Competitor 1</td>
                        <td className='text-black text-center text-2xl font-semibold bg-gray-200'>Competitor 2</td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center text-2xl'>Discreet Design</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center text-2xl'>Accurate Results</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-200'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center text-2xl'>Fast Charging Speed</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center text-2xl'>Battery Life</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-200'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center text-2xl'>Water Resistance</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-500 text-white text-center text-2xl'>In-app Data Analysis</td>
                        <td className='bg-gray-400'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-300'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-200'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    <tr>
                        <td className='bg-gray-900 text-white text-center text-2xl'>Material and Comfort</td>
                        <td className='bg-gray-800'><Image src='/assets/page11/check.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-700'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                        <td className='bg-gray-600'><Image src='/assets/page11/x.png' alt='Ring' width={50} height={50} className="mx-auto block"/></td>
                    </tr>
                    
                </tbody>
                </table>

            </div>
        </div>
    </div>
   

   
    )}
  </>

    
  )
}

export default Page11
