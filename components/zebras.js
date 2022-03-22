import next from 'next';
import {useState} from 'react';
import zebraContent from './utils/zebra-content'




export default function Zebras () {

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlideHandler = () => {

        if (slideIndex >= 3) {
            setSlideIndex(0);
        }
        else {
            setSlideIndex(slideIndex + 1);
        }
       
    }

    return (
        <>
            <div className="xl:hidden">
                <div className="pt-5 mx-7 flex flex-col text-[20px] bg-white">
                    
                    {
                        zebraContent[slideIndex]
                    }

                    <div className="relative self-center pt-10 pb-20 z-50" onClick={nextSlideHandler}>
                        
                            <svg className="animate-pulse" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_9_74)">
                                <path d="M13.2434 0.780565C9.5628 -1.42827 4.85271 1.22282 4.85271 5.53415L4.85271 52.4513C4.85271 56.7627 9.5628 59.4137 13.2434 57.2049L52.3451 33.7415C55.929 31.5882 55.9217 26.3924 52.3451 24.244L13.2434 0.780565Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_9_74">
                                <rect width="58" height="58" fill="white" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 58 58)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        
                    </div>
                    
                    

                </div>
                
                
                <div className="flex justify-end">
                        <div className="mt-[-160px]">      
                            <img src="img/maikel.png"></img>
                        </div>  
                </div>
            </div>

            <div className="hidden xl:flex flex-col gap-4 mt-[-200px]">
                {zebraContent.map((content, index) => {return ( index < 3 && index !== 1 ?
                     <div key={index}>
                        {content}
                        <div className="flex justify-center mr-10">
                            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_153)">
                            <path d="M57.2194 13.2433C59.4283 9.56274 56.7772 4.85265 52.4659 4.85265H5.54869C1.23735 4.85265 -1.41373 9.56274 0.795102 13.2433L24.2585 52.345C26.4118 55.9289 31.6076 55.9217 33.756 52.345L57.2194 13.2433Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_153">
                            <rect width="58" height="58" fill="white" transform="matrix(1 0 0 -1 0 58)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    </div> 

                 : 
                 <div key={index}>
                    {content}
                    </div> ) })}
                 <div className="flex justify-end lg:mr-10">
                        <div className="mt-[-100px]">      
                            <img src="img/maikel.png"></img>
                        </div>  
                </div>
            </div>

            

        </>
    )
}