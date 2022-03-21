export default function AccordionItem (props) { //TODO: pass in open close state
    return (
        <>  
            <div className="flex py-4 bg-white bg-opacity-[34%] mx-4 px-4 rounded-full">
                <div className="mr-auto text-[22px]">{props.headerTitle}</div>
                    <div className="">
                    <span className="inline-block pt-3">
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L10.5 11L19 2" stroke="black" stroke-width="5"/>
                    </svg>
                    </span>
                </div>
            </div>
        </>
    )
}