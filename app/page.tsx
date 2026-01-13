import Header from "@/app/components/Header"
import Contact from "@/app/components/Contact"
import Menu from "@/app/components/Menu"
import HeroSection from "@/app/components/HeroSection";
import AboutUs from "@/app/components/AboutUs";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div className="font-sans bg-white text-[#6e4e37] min-h-screen">
      <Header/>

      <HeroSection/>

      <div id="onas">
        <AboutUs/>
      </div>

      <div id="nabidka">
        <Menu/>
      </div>

      <div id="galerie">

      </div>

      <div id="kontakt">
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}