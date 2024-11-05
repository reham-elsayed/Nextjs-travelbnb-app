import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import Live from "./components/Live/Live";
import GreatOutdoor from "./components/GreatOutdoors/GreatOutdoor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
       <Banner/>
       <Explore/>
       <Live/>
       <GreatOutdoor img={'https://images.unsplash.com/photo-1729762315405-3ff347943cb5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        title='Best Outdoors'  description='Best destination'
         linkText='Get inspired'/>
         
      </main>
      <Footer/>
    </>
  );
}
