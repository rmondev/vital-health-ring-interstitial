import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Props: Array of Image Links (define ts type)
type Props = {
    media: string[]
}

// Pass Props to LvlsOfWellness Component
const LvlsOfWellness: React.FC<Props> = ({ media }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // Reset the fade-in state
    const timeout = setTimeout(() => {
      setIsLoaded(true); // Trigger the fade-in effect after a brief delay
    }, 10); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts or media changes
  }, [media]);

  return (
    <div className={`flex flex-row bg-transparent mb-20 ${isLoaded ? 'fade-in' : ''}`}>
     
     <div className='absolute z-10 w-2/5'>
        <Image 
            alt={'Lvls of Wellness' + media[0]}
            src={media[0]}  
            width={250} 
            height={250} 
            className='object-cover ml-[-220px] mt-[35px] z-10'
        />
      </div>
   
      <video 
        key={media[1]} 
        className="relative rounded-xl shadow-lg bg-transparent" 
        width="800" 
        preload='auto' 
        autoPlay 
        muted
        loop
      >
        <source src={media[1]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='absolute z-10 w-2/5'>
        <Image 
            alt={'Lvls of Wellness' + media[2]}
            src={media[2]}  
            width={250} 
            height={250} 
            className='object-cover ml-[770px] mt-[240px] z-10'
        />
      </div>

    </div>
  );
}

export default LvlsOfWellness;
