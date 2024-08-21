import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Props: Array of Image Links (define ts type)
type Props = {
    media: string[]
}

// Pass Props to LvlsOfWellness Component
const LvlsOfWellNessSml: React.FC<Props> = ({ media }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // Reset the fade-in state
    const timeout = setTimeout(() => {
      setIsLoaded(true); // Trigger the fade-in effect after a brief delay
    }, 10); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts or media changes
  }, [media]);

  return (
    
 
       
    <div className={`flex flex-col gap-2 mb-4 bg-white justify-center items-center${isLoaded ? 'fade-in' : ''}`}>
            <p className='text-black bg-white text-lg text-center font-semibold'>{media[3]}</p>
      <video 
        key={media[1]} 
        className="relative rounded-2xl shadow-lg bg-white" 
        width="400" 
        preload='auto' 
        autoPlay 
        muted
        loop
      >
        <source src={media[1]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='flex flex-row w-full justify-center items-center bg-white gap-2'>
        <div>
            <Image 
                alt={'Lvls of Wellness' + media[2]}
                src={media[2]}  
                width={200} 
                height={200} 
                className='object-cover bg-white'
            />
            </div>
         
         <div>   
            <Image 
                alt={'Lvls of Wellness' + media[0]}
                src={media[0]}  
                width={200} 
                height={200} 
                className='object-cover bg-white'
                />
            </div>
      </div>

    </div>
 

    
    
  );
}

export default LvlsOfWellNessSml;
