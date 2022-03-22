import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Footer() {

    return (
        <> 
            <div className="flex justify-center text-center pt-40 pb-4 xl:text-left xl:text-[30px]">
                <div className="flex flex-col justify-center text-white decoration-4 xl:decoration-8">
                    <div className={"transition ease-in-out delay-[1s] opacity-0 hover:-translate-y-1 hover:opacity-100 cursor-none"}><Link href="./osterei"><a><span style={{backgroundSize: "1000% 1000%"}} className="bg-gradient-to-r from-purple-500 to-pink-500 via-orange-300 animate-gradientMove bg-clip-text text-[transparent]">JETZ HAMMA DI</span></a></Link></div>
                    <div className="hover:underline"><a href="https://boatea.at/custom/agb.pdf" target="_blank" rel="noopener noreferrer">AGB</a></div>
                    <div className="hover:underline"><Link href="./osterei"><a href="./impressum" target="_blank" rel="noopener noreferrer">IMPRESSUM</a></Link></div>
                    <div className="hover:underline"><a href="https://boatea.at/custom/agb.pdf" target="_blank" rel="noopener noreferrer">DATENSCHUTZ</a></div>
                    <div className="text-[15px] pt-4 xl:text-[30px] text-black hover:underline">
                        <a href="https://github.com/philparzer/zebrasxboatea" rel="noopener noreferrer" target="_blank">built with <span className="animate-bounce inline-block">♥</span></a>
                    </div>
                </div>
            </div>

        </>
    )
}