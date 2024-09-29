import Navbar1 from "./components/Navbar1";
import Hero from "./components/Hero";
import Second from "./components/Second";
import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useRef, useState } from "react";
import First from "./components/Cards/First";
import Pick_a_plan from "./components/Pick_a_plan";
import Creative_cloud from "./components/Creative_cloud";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import Main_footer from "./components/Main_footer";
import Design from "./components/design";
import NewCard from "./components/NewCard";
import Secondd from "./components/Cards/Second";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from "./components/Sidebar";
import { BiMessageAltDetail } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion"
import Three from "./components/Cards/three";
import Four from "./components/Cards/four";


const tab = ["Overview", "Photo", "Design", "Video"];

function App() {
  const [links, setLinks] = useState("Overview");
  const [toggle, setToggle] = useState(0)
  const [open, setOpen] = useState(true)
  const ref = useRef(null)
  return (
    <div ref={ref}>
      <div className="overflow-hidden">
        <Navbar1 toggle={toggle} setToggle={setToggle}/>
        <motion.img drag dragConstraints={ref} src="/src/assets/msg.svg" alt="" className="h-14 w-14 fixed right-7 bottom-7 border-2 bg-white border-black rounded-2xl py-2"/>
        {/* <div><BiMessageAltDetail drag className="h-14 w-14 fixed right-7 bottom-7 border-2 bg-white border-black rounded-2xl py-2"/></div> */}
        {open? <div className="bg-gradient-to-r from-[#EA8960] via-[#E49FB7] to-pink-500 w-[80%] lg:flex-wrap fixed left-8 text-sm px-4 sm:left-20 bottom-5 lg:left-32 rounded-[14px] flex lg:flex lg:flex-row lg:justify-center lg:py-4 lg:rounded-[70px] flex-col items-center gap-3 pt-9 pb-2 z-50 ">
          <h1 className="font-medium">Not sure which apps are best for you?</h1>
          <h1>Take a minute. We'll help you to figure it out.</h1>
          <button className="bg-black text-white py-2 px-3 rounded-3xl lg:ml-5">Get started</button>
          <ImCross onClick={() => setOpen(false)} className="lg:top-7 lg:right-7 absolute top-2 right-2 h-5 w-5 fill-white bg-black rounded-[50%] py-1 px-1"/>
        </div> : ""}
      </div>

      {toggle? <Sidebar toggle={toggle}/> :
      <>
      <Hero />
        <Second />
        <div className="relative ">
          <div className="flex px-5 overflow-scroll scrollbar-none justify-center gap-8 mt-5 items-center pl-[130px] pr-0">
            {tab.map((items, i) => (
              <div
                key={i}
                onClick={() => {
                  setLinks(items), console.log(links, items);
                }}
                className={
                  links == items
                    ? "bg-[#e1e1e1] py-3  px-3 rounded-3xl font-medium cursor-pointer"
                    : "hover:bg-[#e1e1e1] py-2 px-3 hover:rounded-3xl hover:font-medium font-medium snap-center cursor-pointer"
                }
              >
                {items}
              </div>
            ))}
            <div className="">
              <IoIosArrowBack className="sm:hidden absolute left-0 top-0 h-14 w-7 bg-white shadow-[0px_-2px_9px_rgba(0,0,0,0.3)]" />
            </div>
            <div className="">
              <IoIosArrowForward className="sm:hidden absolute bg-white right-0 top-0 h-14 w-7  shadow-[-2px_0_9px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </div>

        {links == "Overview" ? <NewCard links={links} setLinks={setLinks}/> : ""}
        {links == "Photo" ? <Secondd links={links} setLinks={setLinks}/> : ""}
        {links == "Design" ? <Three links={links} setLinks={setLinks}/> : ""}
        {links == "Video" ? <Four links={links} setLinks={setLinks}/> : ""}

      <div className="flex justify-center">
        <div className="bg-blue-600 font-medium text-white w-fit py-2 px-3 rounded-3xl my-12 ">
          View all products
        </div>
      </div>

      <Pick_a_plan />
      <Creative_cloud />
      <Questions />
      <Footer />
      <Main_footer />
      </>
  }

      

      

      

      {/* <Design/> */}
      {/* <NewCard/> */}
    </div>
  );
}

export default App;
