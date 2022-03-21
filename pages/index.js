import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo'
import Giveaway from '../components/giveaway'
import Minimap from '../components/minimap'
import ZebrasHeader from '../components/zebras-header'
import Zebras from '../components/zebras'
import ZebrasLink from '../components/zebras-link'
import Menu from '../components/menu'
import Footer from '../components/footer'
import MenuShowcase from '../components/menu-showcase'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zebras X Boatea</title>
        <meta name="description" content="Lifetime discount vouchers on any Boatea product" />
        <link rel="icon" href="/favicon.ico" />
        <meta view="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-[100%] bg-gradient-to-t from-[#F7C3DC] via-[#F8CBE1] to-[#FFFEFF] font-bungee overflow-x-hidden"> {/*TODO: animate move updown */}
        
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <Logo />
        <div>
        <div className="hidden xl:block mt-60">
          <div className="flex">
            <img className="mt-20 animate-clouds1" src="img/cloud-big.png"></img>
            <img className="relative animate-clouds2" src="img/cloud-multiple.png"></img>
         </div>   
        </div>
        </div>
        <div className="hidden xl:flex justify-end p-10 mr-10">
          <Giveaway date="Q1 2022" pieces="3000" winners="5" alignment="items-left"/>
        </div>
      </div>

      <div className="bg-cover relative xl:hidden" style={{backgroundImage: 'url("./img/mobile-palm.png")'}}>
        <Giveaway date="Q1 2022" pieces="3000" winners="5"/>
        <Minimap />
        <ZebrasHeader />
      </div>
      <div className="relative xl:hidden">
        <Zebras />
        <ZebrasLink />
      </div>

      
      <div className="bg-cover relative xl:hidden" style={{backgroundImage: 'url("./img/mobile-skyline.png")'}}>
        <Menu />
        <Footer />
      </div>
      
      {/*LG CONTENT*/}
      <div className="bg-cover bg-center" style={{backgroundImage: 'url("./svg/skyline-lg.svg")'}}>
      <div className=" bg-cover hidden xl:grid grid-cols-5"  >
          <div className="pt-20 col-span-3">
            <Minimap />
            <div className="grid grid-cols-8">
              <div className="col-span-6"><Menu /></div>
              
              <div className="col-span-2">
                <MenuShowcase />
              </div>
              
            </div>
           
          </div>
          <div className="col-span-1">´
          <div className="hidden xl:block mt-20">
          <div className="flex flex-col">
            <img className="relative animate-clouds2" src="img/cloud-multiple-alt.png"></img>
            <img className="mt-20 animate-clouds3" src="img/cloud-big-alt.png"></img>
         </div>   
        </div>
          </div>
          <div >
            <Zebras />
            <ZebrasLink />
          </div>
          <Footer />
      </div>
      </div>
    </div>
    </div>
  )
}
