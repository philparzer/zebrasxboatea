export default function Giveaway(props) {
    
    
    
    return (
        <>
        <div className="flex justify-center py-5">
            <div className="text-[40px] xl:text-right">
                <div className="text-[20px] leading-[20px]">Limited Edition</div>
                <div className="leading-[40px]">{props.date}</div>
                <div className="bg-black text-white px-4 rounded-full">{props.pieces} <span className="text-[20px]">Becher</span></div>
                <div className="mt-1"> <span className="bg-black border px-4 rounded-full text-[#FCD752] inline-block">{props.winners} <span className="text-[20px] inline-block">Gewinner</span></span></div>
            </div>
        </div>
        </>
    )
}