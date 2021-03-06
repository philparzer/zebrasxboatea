export default function Minimap () {
    return (
        <>
            <div className="grid grid-cols-5 xl:grid-cols-6 pt-4 xl:ml-20">
                <div className="col-span-5 xl:col-span-3 flex xl:justify-end">
                    <a className="xl:flex w-[70%] xl:order-2 ml-10 transition-all duration-500 ease-in-out hover:brightness-125" href="https://www.google.com/maps/place/BoaTea+Urban+Drinks/@47.502142,9.7458335,19.25z/data=!4m5!3m4!1s0x479b13e5e4c676f5:0xfddd401cfb806c5!8m2!3d47.5021894!4d9.7461137" target="_blank" rel="noopener noreferrer">
                        <div className="relative">
                            <img className="xl:hidden" src="img/minimap.png" ></img>
                            <img className="hidden xl:flex" src="img/minimap-lg.png"></img>
                        </div>
                    </a>
                    
                    
                    <div className="flex items-center">
                        <div className="flex flex-col gap-5">
                            <a href="https://www.instagram.com/boatea_urbandrinks/" className="group" target="_blank" rel="noopener noreferrer">
                                <svg width="60" height="60"  viewBox="0 0 89 89" xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:fill-[#E873AA] transition-all duration-500 ease-in-out " d="M54.9909 23.3699C52.2541 23.2438 51.4309 23.2216 44.5 23.2216C37.5691 23.2216 36.7496 23.2475 34.0128 23.3699C26.9707 23.6925 23.6925 27.0263 23.3699 34.0128C23.2475 36.7496 23.2179 37.5691 23.2179 44.5C23.2179 51.4309 23.2475 52.2504 23.3699 54.9909C23.6925 61.9588 26.9559 65.3112 34.0128 65.6338C36.7459 65.7562 37.5691 65.7858 44.5 65.7858C51.4346 65.7858 52.2541 65.7599 54.9909 65.6338C62.033 65.3149 65.3075 61.97 65.6338 54.9909C65.7562 52.2541 65.7821 51.4309 65.7821 44.5C65.7821 37.5691 65.7562 36.7496 65.6338 34.0128C65.3075 27.03 62.0256 23.6925 54.9909 23.3699ZM44.5 57.8315C37.139 57.8315 31.1685 51.8647 31.1685 44.5C31.1685 37.139 37.139 31.1723 44.5 31.1723C51.861 31.1723 57.8315 37.139 57.8315 44.5C57.8315 51.861 51.861 57.8315 44.5 57.8315ZM58.358 33.7607C56.6374 33.7607 55.243 32.3663 55.243 30.6457C55.243 28.925 56.6374 27.5307 58.358 27.5307C60.0787 27.5307 61.473 28.925 61.473 30.6457C61.473 32.3626 60.0787 33.7607 58.358 33.7607ZM53.1515 44.5C53.1515 49.28 49.2763 53.1515 44.5 53.1515C39.7237 53.1515 35.8485 49.28 35.8485 44.5C35.8485 39.72 39.7237 35.8485 44.5 35.8485C49.2763 35.8485 53.1515 39.72 53.1515 44.5ZM44.5 0C19.9249 0 0 19.9249 0 44.5C0 69.0751 19.9249 89 44.5 89C69.0751 89 89 69.0751 89 44.5C89 19.9249 69.0751 0 44.5 0ZM70.3026 55.2022C69.8761 64.64 64.6214 69.8687 55.206 70.3026C52.4358 70.4287 51.5495 70.4583 44.5 70.4583C37.4505 70.4583 36.5679 70.4287 33.7977 70.3026C24.3638 69.8687 19.1313 64.6325 18.6974 55.2022C18.5713 52.4358 18.5417 51.5495 18.5417 44.5C18.5417 37.4505 18.5713 36.5679 18.6974 33.7977C19.1313 24.3638 24.3675 19.1313 33.7977 18.7011C36.5679 18.5713 37.4505 18.5417 44.5 18.5417C51.5495 18.5417 52.4358 18.5713 55.206 18.7011C64.6437 19.135 69.8798 24.3823 70.3026 33.7977C70.4287 36.5679 70.4583 37.4505 70.4583 44.5C70.4583 51.5495 70.4287 52.4358 70.3026 55.2022Z" fill="black"/>
                                </svg>                        
                            </a>
                            <a href="https://www.facebook.com/boateabregenz" className="group " target="_blank" rel="noopener noreferrer">
                                <svg width="60" height="60" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:fill-[#E873AA] transition-all duration-500 ease-in-out " d="M42 0C18.8055 0 0 18.8055 0 42C0 65.1945 18.8055 84 42 84C65.1945 84 84 65.1945 84 42C84 18.8055 65.1945 0 42 0ZM52.5 28H47.775C45.892 28 45.5 28.7735 45.5 30.723V35H52.5L51.7685 42H45.5V66.5H35V42H28V35H35V26.922C35 20.7305 38.2585 17.5 45.6015 17.5H52.5V28Z" fill="black"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 xl:col-span-1 pl-4 xl:pl-0 flex flex-col place-content-center items-center xl:items-start py-5 text-[20px] xl:text-[30px]">
                    <div className="pb-2">  
                        <svg width="130" height="9" viewBox="0 0 130 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="130" height="9" fill="black"/>
                        </svg>
                    </div>
                    <div className="text-[15px]">Montag - Freitag</div>
                    <div className="leading-[15px] xl:leading-[30px] pb-2">11:00 - 18:00</div>
                    <div className="text-[15px] xl:leading-[30px]">Samstag</div>
                    <div className="leading-[15px] xl:leading-[30px]">12:00 - 17:00</div>
                </div>
                
                <div className="hidden col-span-2 xl:flex mt-[-400px]">
                        <img className="animate-float" src="svg/helicopter.svg"></img>
                </div>

                            
                
                
            </div>
        </>
    )
}