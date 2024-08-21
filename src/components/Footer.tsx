import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

const Footer = () => {

   
  return (
   <>
    <div className='relative'>
        <div className='flex flex-col justify-center items-center bg-white'>
            {/* Image Container */}
            <div className='p-6'>
                <Image
                    src="/assets/global/logo.png"
                    alt="Secure"
                    width={300}
                    height={300}
                    objectFit='contain'
                />
            </div>

            {/* Button Container */}
            <div className='flex flex-col justify-center items-center bg-white gap-4'>
                <p className='text-center text-black text-sm'>Terms & Conditions | Privacy Policy | Contact Us | Affiliate</p>
                <p className='text-center text-black text-sm'>© 2024 Vital Health RIng. All Rights Reserved.</p>
                <p className='text-center text-black text-xs p-2'>This agreement may be updated to reflect changes to our information practices. In the event any changes are made, we will notify 
                you via email and/or post an announcement on our site. We recommend you periodically review this page for the latest information on our Terms & Conditions. If you do not agree to the changes made, 
                please terminate your registration with USS by notifying USS immediately. You can determine when this agreement was last revised by checking the “last updated” legend at the top of this policy.
                </p>
            </div>

        </div>

    </div>
   </>
  )
}

export default Footer
