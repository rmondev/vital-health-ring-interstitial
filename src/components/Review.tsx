import Image from 'next/image'
import React from 'react'

type ReviewProps = {
    review: {
        id: number,
        reviewTitle: string,
        reviewerName: string,
        reviewContent: string,
        reviewPic: string,
        avatar: string
    }
}

const Review: React.FC<ReviewProps> = ({ review }) => {

  return (
    <div className='relative'>
     <div className='flex flex-col items-start w-[300px] m-8'>
        <div className='flex justify-center items-start w-full h-[220px]'>
            <Image
                src={review.reviewPic}
                alt="Review Image"
                width={200}
                height={200}
                objectFit='cover'  // Ensure the image covers the space without stretching
            />
        </div>
        <div className='text-center w-full mt-4'>
            <div className='flex justify-center items-center p-1'>
                <p className='text-lg font-semibold text-black'>{review.reviewTitle}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-sm mt-2 text-black text-center'>{review.reviewContent}</p>
                <div className='flex flex-row mt-4'>
                <div className='flex flex-row justify-between gap-8'>
                    <div className='flex flex-row'>
                        <Image
                                src={review.avatar}
                                alt="Reviewer Avatar"
                                width={50}
                                height={50}
                                objectFit='cover'  // Ensure the image covers the space without stretching
                                className='rounded-full'
                            />
                        <div className='flex flex-col mt-2 ml-2'>     
                            <p className='text-xs font-bold -ml-[55px] text-black'>{review.reviewerName}</p>
                            <div className='flex flex-row ml-1'>
                                <Image
                                    src='/assets/page12/greenCheck.svg'
                                    alt="Green Check"
                                    width={12}
                                    height={12}
                                    objectFit='cover'  // Ensure the image covers the space without stretching
                                    className='rounded-full'
                                />
                                <p className='text-xs italic text-green-400 bg-transparent'>Verified Customer</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex'>
                        <Image
                            src='/assets/global/stars.svg'
                            alt="Reviewer Avatar"
                            width={50}
                            height={50}
                            objectFit='cover'  // Ensure the image covers the space without stretching
                            className='rounded-full'
                        />
                    </div>
                </div>
            </div>
            </div>
            

            
        </div>
     </div>   
    </div>
  )
}

export default Review
