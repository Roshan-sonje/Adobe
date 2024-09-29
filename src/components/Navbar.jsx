import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <div className="border border-b-gray-200 h-[45px] bg-red-5  flex items-center px-3">
      <div className="flex items-center justify-between">
        <div className="flex">
            <div className="md:hidden p-2"><CiMenuBurger /></div>
            <div className="flex gap-1 items-center ml-1">
                <img
                    src="/src/assets/logo.svg"
                    alt=""
                    className=" h-[17px] w-[16px]"
                />
                <p className="text-red-500 font-[700] hidden lg:block">Adobe</p>
                <div className="hidden md:flex">
                    <div>
                        <p className="flex items-center ml-2 px-2 border  border-t-white border-l-gray border-r-gray h-[45px] text-xs gap-1">
                        Creativity & Design{" "}
                        <IoIosArrowDown className="translate-y-[2px]" />
                        </p>
                    </div>
                    <div className="flex text-xs items-center gap-4 ml-2">
                        <p className="text-[10px] font-semibold border md:border-b-black border-l-0 border-r-0 h-[100%] flex items-center">Adobe Creative Cloud</p>
                        <p className="flex items-center gap-1 text-[10px] font-semibold border border-l-0 border-r-0 h-[100%]">
                        Explore <IoIosArrowDown className="translate-y-[2px]" />
                        </p>
                        <p className="text-[10px] font-semibold border border-l-0 border-r-0 h-[100%] flex items-center">Feature</p>
                        <p className="text-[10px] font-semibold border border-l-0 border-r-0 h-[100%] flex items-center">For Business</p>
                        <p className="text-[10px] font-semibold border  border-l-0 border-r-0 h-[100%] flex items-center">Compare Plans</p>
                        <p className="flex items-center gap-1 text-[10px] font-semibold border  border-l-0 border-r-0 h-[100%]">
                        Learn & Support <IoIosArrowDown className="translate-y-[2px]" />
                        </p>
                    </div>
                    <div className="ml-3 bg-blue-600 font-semibold px-2 self-center py-1 h-6 rounded-xl text-xs text-white">
                        Buy now
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex gap-2.5 items-center">
                <img src="/src/assets/menu.svg" alt="" className="h-[15px]" />
                <div className="border border-[#C6C6C6] rounded-xl px-2 py-[2px] font-semibold text-[11px]">
                    Sign In </div>
        </div>
            
      </div>
    </div>
    <div className="hidden md:block">
    <p className="text-[9px] font-semibold shadow-md text-gray-500 p-2 pl-[247px]">Home  /  Adobe Creative Cloud</p>
  </div>
  </>
  );
};

export default Navbar;

/*
Adobe Creative Cloud
Explore
Feature
For Business
Compare Plans
Compare Plans
*/
