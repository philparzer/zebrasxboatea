import AccordionItem from "./utils/accordion-item"
import Image from 'next/image'

export default function Menu () {
    return (
        <div className="flex justify-center pt-20 px-5">  
            
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
                    <div className="pt-8">
                        <AccordionItem headerTitle="Wonder Waffles" />
                        <div className="absolute mt-[-90px] ml-[48%] px-12"><Image
                            src="/img/lindas.png"
                            alt="linda's icecream logo"
                            width={128}
                            height={60}
                        />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            

        </div>
    )
}