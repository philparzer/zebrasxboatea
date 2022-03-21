import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/logo'
import Giveaway from '../components/giveaway'
import Location from '../components/minimap'
import OpeningTimes from '../components/openingTimes'
import ZebrasHeader from '../components/zebras-header'
import ZebrasMobile from '../components/zebras-mobile'
import ZebrasLink from '../components/zebras-link'
import Menu from '../components/menu'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zebras X Boatea</title>
        <meta name="description" content="Lifetime discount vouchers on any Boatea product" />
        <link rel="icon" href="/favicon.ico" />
        <meta view="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-[100%] bg-gradient-to-t from-[#F7C3DC] via-[#F8CBE1] to-[#FFFEFF] font-bungee"> {/*TODO: animate move updown */}
          
        <Logo />
        <div className="bg-cover" style={{backgroundImage: 'url("./img/mobile-palm.png")'}}>
          <Giveaway date="Q1 2022" pieces="3000" winners="5"/>
          <Location />
          <OpeningTimes />
          <ZebrasHeader />
        </div>
          <ZebrasMobile />
        
        <ZebrasLink />
        <div className="bg-cover" style={{backgroundImage: 'url("./img/mobile-skyline.png")'}}>
          <Menu />
          <Footer />
        </div>
      
    </div>
    </div>
  )
}
