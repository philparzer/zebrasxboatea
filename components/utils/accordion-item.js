import { useState } from 'react';
import { useSpring, animated } from "react-spring";
import Image from 'next/image' 

export default function AccordionItem (props) { //TODO: pass in open close state
    
    const [open, setOpen] = useState(false);
    const [fade, setFade] = useState(false);

    //TODO: set height according to number of items


    const clickHandler = () => {
        setOpen(!open);
        setFade(!fade);
    }

    //TODO: update context what is currently open

    const openAnimation = useSpring({
        from: { height: "50px", borderRadius: "25px"},
        to: { height: open ? "400px" : "50px", borderRadius: "25px" },
        config: { duration: "300" }
      });
    
    const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      paddingBottom: open ? "10px" : "0px",
    },
    config: { duration: "120" }
    });

    return (
        <>  
            <animated.div className="bg-white pt-2 bg-opacity-[34%] mx-4 px-4 rounded-[50px] overflow-hidden h-[50px]" style={openAnimation} >
                <div className="flex cursor-pointer" onClick={clickHandler}>
                    <div className="mr-auto text-[22px]" > {props.headerTitle}</div >
                    <div className="">
                        <animated.span className="inline-block pt-3" style={iconAnimation}>
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L10.5 11L19 2" stroke="black" strokeWidth="5"/>
                        </svg>
                        
                        </animated.span>
                    </div>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="mr-auto">Icetea Erdbeere</div>
                            <div className="mr-auto text-[10px] text-left">Kombination aus Fruchtsaft und Jasmin Grüntee</div>
                        </div>
                        <div className="ml-auto">3,80</div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="mr-auto">Icetea Mango</div>
                            <div className="mr-auto text-[10px] text-left">Kombination aus Fruchtsaft und Jasmin Grüntee</div>
                        </div>
                        <div className="ml-auto">3,80</div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="mr-auto">Icetea Passion</div>
                            <div className="mr-auto text-[10px] text-left">Kombination aus Fruchtsaft und Jasmin Grüntee</div>
                        </div>
                        <div className="ml-auto">3,80</div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div className="mr-auto">Icetea Passion</div>
                            <div className="mr-auto text-[10px] text-left">Kombination aus Fruchtsaft und Jasmin Grüntee</div>
                        </div>
                        <div className="ml-auto">3,80</div>
                    </div>
                    
                </div>

            </animated.div>

            <div className={`fixed pt-2 right-5 xl:left-20 bottom-11 transition-all duration-200 ${fade ? "opacity-100" : "opacity-0"} z-10 xl:hidden`}>
                {/* <div className="bg-black text-white relative z-20 px-2 mb-2">BLUEBERRY BUTTERFLY</div>                                   */}
                <Image
                    src="/img/sample.png"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
                </div>
            
            
                
                
            
        </>
    )
}