import Link from 'next/link'

export default function Impressum () {
    return (
        <div className="h-screen bg-gradient-to-t from-[#ff9fcd] via-[#F8CBE1] to-[#d4e6f5]  font-bungee overflow-x-hiddeny animate-backgroundMove"  style={{backgroundSize: "400% 200%"}}>
            
            <div className="flex items-center justify-center min-h-screen ">
                <div className="w-2/6 bg-white p-4 rounded-xl">
                    <div className="grid grid-cols-3">
                        <h1 className="text-[50px] col-span-3 pb-10">Impressum</h1>
                        <h2 className="text-[30px] col-span-3">Kontakt</h2>
                        <div>Adresse:</div><div className="col-span-2">BoaTea OG Römerstraße 2 Top 44/2 6900 Bregenz</div>
                        <div>Telefon:</div><div className="col-span-2"><a href="tel:+43 676 4842355">+43 676 4842355</a></div>
                        <div>E-Mail:</div><div className="col-span-2"><a href="mailto:boatea.office@gmail.com">boatea.office@gmail.com</a></div>
                        <div>UID-Nummer:</div><div className="col-span-2">ATU76976578 GISA:556964s</div>
                        <h2 className="text-[30px] col-span-3 pt-10">Streitbeilegung</h2>
                        <div className="col-span-3 font-sans">Verbraucher haben die Möglichkeit, sich an die Online-Streitbeilegungsplattform der EU zu wenden: https://ec.europa.eu/odr. Sie können Ihre Beschwerde auch direkt bei uns bei folgender E-Mail-Adresse einbringen: boatea.office@gmail.com</div>
                    </div>
                </div>
            </div>
            
           <div className="fixed top-10 left-10 text-[30px]"> <Link href="./"><a><span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></span> <span className="text-[35px]">Zurück</span></a></Link></div>
        
        </div>
    )
}