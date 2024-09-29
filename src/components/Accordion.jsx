// Accordion.js
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import Footer_link from "./Footer_link";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title flex justify-between px-8 border-t-2 py-4" onClick={toggleAccordion}>
        <h3 className="sm:text-[15px] text-[12px] font-semibold sm:font-medium text-gray-500">{title}</h3>
        <span>{isOpen ? <FiMinus/> : <GoPlus/>}</span>
      </div>
      {isOpen ? <div className="pl-4">{children}</div> : ""}
    </div>
  );
};

const Accordion = () => {
  return (
    <>
    <div className="accordion md:hidden">
      <AccordionItem title="Shop for">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
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
      </AccordionItem>


      <AccordionItem title="For business">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>Creative Cloud for business</li>
        <li>Creative Cloud for enterprise</li>
        <li>Acrobat for Business</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="For education">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>Discounts for students and teachers</li>
        <li>Schools and universities</li>
        <li>Digital Learning Solutions</li>

        </ul>
      </AccordionItem>

      <AccordionItem title="For mobile">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>Apps for iOS</li>
        <li>Apps for Android</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Experience Cloud">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>What is Experience Cloud?</li>
        <li>Analytics</li>
        <li>Experience Manager</li>
        <li>Commerce</li>
        <li>Marketo Engage</li>
        <li>Workfront</li>
        <li>Terms of Use</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Support">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>What is Experience Cloud?</li>
        <li>Analytics</li>
        <li>Experience Manager</li>
        <li>Commerce</li>
        <li>Marketo Engage</li>
        <li>Workfront</li>
        <li>Terms of Use</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Resources">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>Adobe Blog</li>
        <li>Adobe Developer</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Adobe Account">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>Log in to your account</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Adobe">
        <ul className="flex flex-col gap-3 pl-5 text-[11px] sm:text-sm pb-4">
        <li>About</li>
        <li>AI Overview</li>
        <li>Careers</li>
        <li>Newsroom</li>
        <li>Corporate responsibility</li>
        <li>Investor Relations</li>
        <li>Supply chain</li>
        <li>Trust Centre</li>
        <li>Events</li>
        <li>Diversity and inclusion</li>
        <li>Integrity</li>
        </ul>
      </AccordionItem>
    </div>

    <Footer_link/>
    </>
  );
};

export default Accordion;
