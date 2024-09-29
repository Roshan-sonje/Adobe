import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Navbar1 = ({toggle,setToggle}) => {
  return (
    <>
      <div className="nav px-3 flex shadow-lg justify-between md:px-9 h-[60px] md:justify-between  fixed w-full z-50 bg-white">
        <div className="flex">
          <div className="menu-logo flex items-center gap-5">
            <CiMenuBurger onClick={() => setToggle(!toggle)} className="md:hidden h-[20px] w-[25px]"/>
            <div className="flex gap-2 items-center">
              <img src="/src/assets/logo.svg" alt="" className="h-[20px] xl:h-5 md:h-6" />
              <h1 className="hidden lg:block text-red-600 text-[19px] md:text-[16px] font-semibold">Adobe</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="ml-3 mr-1 px-5  flex items-center text-xs font-semibold h-full border border-y-transparent border-x-gray-300">Creativity & Design <IoIosArrowDown className="ml-1"/></div>
            <div className=" flex items-center gap-2 md:gap-3 ml-3 h-full">
                <div className=" text-[9px] text-xs font-semibold items-center flex">Adobe Creative Cloud</div>
                <div className=" flex text-[9px] text-xs font-semibold h-full items-center border border-transparent border-b-black">Explore <IoIosArrowDown className="translate-y-[2px] ml-[1px]"/></div>
                <div className=" text-[9px] text-xs font-semibold  h-full items-center flex ">For Business</div>
                <div className=" text-[9px] text-xs font-semibold  h-full items-center flex ">Compare Planes</div>
                <div className=" flex text-[9px] text-xs font-semibold  h-full items-center ">Learn & Support <IoIosArrowDown className="translate-y-[2px] ml-[1px]"/></div>
                <div className="bg-blue-500 text-white py-2 px-3 text-sm font-semibold rounded-[29px] md:ml-3">Buy now</div>
            </div>
          </div>
        </div>

        <div className="menu-sign-in flex gap-3 items-center">
            <img src="/src/assets/menu.svg" alt="" className="h-5"/>
            <div className="border-[#C6C6C6] flex items-center text-[12px] md:text-xs font-bold rounded-3xl py-1 px-3 border">Sign In</div>
        </div>
      </div>
      <div className="mt-[60px] border">
        <div className="hidden xl:block  text-[8px] font-semibold py-[6px] xl:w-[73%] lg:pl-9">Home  /  Adobe Creative Cloud</div>
        
      </div>
    </>
  );
};

export default Navbar1;


{/* <source src="https://www.adobe.com/creativecloud/media_1167374e3354ef57f126fa78a55cbc1708ac4babd.mp4" type="video/mp4"></source> */}