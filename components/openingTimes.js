export default function OpeningTimes () {
    return (
        <>
            <div className="grid grid-cols-3 pl-2">
                <div className="flex flex-col items-center py-5 text-[20px] col-span-2">
                    <div className="pb-2">  
                        <svg width="130" height="9" viewBox="0 0 130 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="130" height="9" fill="black"/>
                        </svg>
                    </div>
                    <div className="text-[15px]">Montag - Freitag</div>
                    <div className="leading-[15px] pb-2">11:00 - 18:00</div>
                    <div className="text-[15px]">Samstag</div>
                    <div className="leading-[15px]">12:00 - 17:00</div>
                </div>
            </div>


        </>
    )
}