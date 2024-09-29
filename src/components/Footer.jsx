import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Accordion from "./Accordion";

const Footer = () => {
  const [open, setOpen] = useState(0)
  return (
    <div>
      <div>
        <>
          {/* <div className="flex flex-col   justify-between border-y-2 py-4 px-7">
            <div className="flex justify-between">
            <h1 onClick={()=> setOpen(!open)} className="text-[14px] font-medium">Shop for</h1>
            <IoIosArrowDown />
            </div>
            {"Shop for" || open? 
            <div className="mt-3">
            <ul className="text-[13px] flex flex-col gap-2">
              <li>Creative Cloud</li>
              <li>Photoshop</li>
              <li>Adobe Express</li>
              <li>Photography</li>
              <li>Premiere Pro</li>
              <li>Adobe Stock</li>
              <li>Elements Family</li>
              <li>Document Cloud</li>
              <li>Acrobat</li>
              <li>Acrobat Sign</li>
              <li>Special offers</li>
            </ul>
          </div>
          : ""
            }
          </div> */}

          <Accordion/>

          

          
        </>
      </div>
    </div>
  );
};

export default Footer;
