import AccordionItem from "./utils/accordion-item"
import Image from 'next/image'

export default function Menu () {
    return (
        <div className="flex justify-center pt-20 px-5 xl:ml-20">  
            
            <div className="w-full text-center">
                <h2 className="text-[80px] ">
                    Menu
                </h2>

                <div className="bg-white bg-opacity-[44%] w-full flex flex-col p-4 rounded-[50px] gap-4">
                    <div></div>
                    <AccordionItem headerTitle="Ice Teas" />
                    <AccordionItem headerTitle="Sparkling Teas" />
                    <AccordionItem headerTitle="Juice Teas" />
                    <AccordionItem headerTitle="Latte Specials" />
                    <AccordionItem headerTitle="Cookies" />
                    <div className="pt-8  lg:pt-20 relative">
                        <div className="absolute mt-[-25px] lg:mt-[-60px] ml-[48%] px-12 lg:px-0 lg:ml-[80%]">
                            <Image
                                src="/img/lindas.png"
                                alt="linda's icecream logo"
                                width={128}
                                height={60}
                            />
                        </div>
                        <AccordionItem headerTitle="Wonder Waffles" />
                    </div>
                    <div></div>
                </div>
            </div>
            

        </div>
    )
}