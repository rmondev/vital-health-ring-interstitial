import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

const Page13 = () => {
    const [isClient, setIsClient] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
      setIsClient(true);
    }, []);

    const toggleAnswer = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    }
  
    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    const faqData = [
        {
            question: 'How long does shipping take?',
            answer: 'Shipping typically takes 5-7 business days within the continental U.S., and 10-15 business days for international orders.'
        },
        {
            question: 'How does the money-back guarantee work?',
            answer: 'You have 30 days from the date of delivery to return your ring for a full refund, no questions asked.'
        },
        {
            question: 'How accurate is the Vital Health Ring?',
            answer: 'The Vital Health Ring provides accurate readings, but it is not a medical device. It is designed for general wellness and fitness purposes.'
        },
        {
            question: 'How does the Vital Health Ring work?',
            answer: 'The ring uses sensors to monitor your vital signs, including heart rate, sleep patterns, and activity levels. The data is synced with the Vital Health app on your smartphone.'
        },
        {
            question: 'What features does the Vital Health Ring offer?',
            answer: 'The ring offers features like heart rate monitoring, sleep tracking, activity tracking, and more, all accessible through the Vital Health app.'
        },
        {
            question: 'How do I set up the Vital Health Ring?',
            answer: 'Simply download the Vital Health app, follow the in-app setup instructions, and start tracking your health metrics immediately.'
        },
        {
            question: 'Is the Vital Health Ring compatible with my smartphone?',
            answer: 'The ring is compatible with most smartphones running iOS or Android. Please check the compatibility list on our website.'
        },
        {
            question: 'Can I wear the ring while swimming or showering?',
            answer: 'Yes, the ring is water-resistant and can be worn while swimming or showering.'
        },
    ];
  
    if (!isClient) {
      // Return a loading state or the server-compatible version of the HTML
      return <div className="h-screen">Loading...</div>;
    }

  return (
   <>
   {isSmallScreen ? (
    <div className='relative'>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100">
            <p className='text-gray-900 bg-transparent text-4xl font-extrabold text-center bold p-4'>Vital Health Ring FAQs</p>
            {faqData.map((data, index) => (
                <div key={index} className='w-4/5 m-2'>
                    <div
                        className='flex bg-white rounded-lg shadow-md cursor-pointer p-3'
                        onClick={() => toggleAnswer(index)}
                    >
                        <p className='text-black font-semibold text-lg'>
                            {data.question}
                        </p>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}
                    >
                        <div className='flex bg-gray-100 rounded-lg shadow-inner p-3'>
                            <p className='text-black text-md'>
                                {data.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='flex flex-col items-center justify-center bg-slate-100'>
            {/* Button Container */}
            <div className='flex justify-center items-center bg-slate-100 relative pb-2'>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 justify-center items-center rounded-full w-full border-black border flex flex-row relative">
                    Save 50% Now!
                </button>
            </div>

            {/* Button Footer Container */}
            <div className='flex justify-center items-center bg-slate-100 gap-1 pb-4'>
                <Image
                    src="/assets/page1/greenDot.svg"
                    alt="Secure"
                    width={10}
                    height={10}
                    objectFit='contain'
                />
                <p className='text-black text-xs font-bold'>Ships by 22nd December |</p>
                <Image
                    src="/assets/page1/hourGlass.png"
                    alt="Secure"
                    width={10}
                    height={10}
                    objectFit='contain'
                />
                <p className='text-black text-xs font-bold'>Stock: Only 58 Vital Health Rings Left!</p>
            </div>
        </div>
    </div>
   ) : (
    <div className='relative'>
        <div className="flex flex-col justify-center items-center p-2 bg-slate-100">
            <p className='text-gray-900 bg-transparent text-4xl font-extrabold text-center bold p-4'>Vital Health Ring FAQs</p>
            {faqData.map((data, index) => (
                <div key={index} className='w-2/5 m-2'>
                    <div
                        className='flex bg-white rounded-lg shadow-md cursor-pointer p-3'
                        onClick={() => toggleAnswer(index)}
                    >
                        <p className='text-black font-semibold text-lg'>
                            {data.question}
                        </p>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-40' : 'max-h-0'}`}
                    >
                        <div className='flex bg-gray-100 rounded-lg shadow-inner p-3'>
                            <p className='text-black text-md'>
                                {data.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Button Container */}
        <div className='flex justify-center items-center bg-slate-100 relative pt-4'>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 justify-center items-center rounded-full xl:w-1/5 border-black border flex flex-row relative">
                Save 50% Now!
            </button>
        </div>

        {/* Button Footer Container */}
        <div className='flex justify-center items-center bg-slate-100 w-full p-4'>
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
   )}
   </>
  )
}

export default Page13
