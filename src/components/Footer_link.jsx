import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const footer = [
  {
    logo: "https://www.adobe.com/in/federal/footer/fragments/media_1d6689110cb22e2f8141cf6b4ff4e5e91260e5d51.png",
    title: "Adobe Acrobat Reader",
  },
  {
    logo: "https://www.adobe.com/in/federal/footer/fragments/media_1ac414dfef628bd50cdfb885ed27e2e95e504ec5a.png",
    title: "Adobe Express",
  },
  {
    logo: "https://www.adobe.com/in/federal/footer/fragments/media_193d7ad6fda77267eb7f7b86e95aeb7d7a11df041.png",
    title: "Photoshop",
  },
  {
    logo: "https://www.adobe.com/in/federal/footer/fragments/media_1ca1b5ac9637e42fdb5673d96be80818f0c9fc9bf.png",
    title: "Illustrator",
  },
];
const Footer_link = () => {
  return (
    <>
      <div className=" md:flex md:flex-col justify-center px-9">
        <div className="grid lg:auto-cols-fr md:grid-cols-4 xl:grid-cols-5  pt-8 gap-5">
          <div className="">
            <h1 className="font-semibold mb-3 xl:text-xs">Shop for</h1>
            <ul>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Creative Cloud
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Photoshop</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Adobe Express
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Photography
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Premiere Pro
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Adobe Stock
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Elements Family
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Document Cloud
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Acrobat</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Acrobat Sign
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Special offers
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-semibold mb-3 xl:text-xs">For business</h1>
              <ul>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Creative Cloud for business
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Creative Cloud for enterprise
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Acrobat for Business
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-3 xl:text-xs">For education</h1>
              <ul>
                <li className="text-[13px] xl:text-[10px] xl:mb-1 ">
                  Discounts for students and teachers
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Schools and universities
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Digital Learning Solutions
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-3 xl:text-xs">For mobile</h1>
              <ul>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Apps for iOS
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Apps for Android
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="font-semibold mb-3 xl:text-xs">Experience cloud</h1>
            <ul>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                What is Experience Cloud?
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Analytics</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Experience Manager
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Commerce</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Marketo Engage
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Workfront</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Terms of Use
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-semibold mb-3 xl:text-xs">Support</h1>
              <ul>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  What is Experience Cloud?
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Analytics
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Experience Manager
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">Commerce</li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Marketo Engage
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Workfront
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Terms of Use
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-3 xl:text-xs">Resources</h1>
              <ul>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Adobe Blog
                </li>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Adobe Developer
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-3 xl:text-xs">Adobe Account</h1>
              <ul>
                <li className="text-[13px] xl:text-[10px] xl:mb-1">
                  Log in to your account
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-semibold mb-3 xl:text-xs">Adobe</h1>
            <ul>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">About</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                AI Overview
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Careers</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Newsroom</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Corporate responsibility
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Investor Relations
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Supply chain
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Trust Centre
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Events</li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">
                Diversity and inclusion
              </li>
              <li className="text-[13px] xl:text-[10px] xl:mb-1">Integrity</li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:flex gap-7 border-y-2 border-black border-opacity-55 py-2 justify-center">
          <h1 className="text-[14px] font-semibold">Featured Products</h1>
          {footer.map((items,i) => (
            <div key={i} className="flex">
              <div className="flex gap-2 items-center">
                <img src={items.logo} alt="" className="h-6" />
                <h1 className="text-xs">{items.title}</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:flex lg:justify-between items-center flex-wrap my-6">
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <TfiWorld className="h-5 w-5" />
              <h1 className="text-xs">Change region</h1>
              <IoIosArrowDown className="" />
            </div>
            <div className="flex gap-2">
              <IoLogoFacebook className="h-7 w-7 fill-gray-500" />
              <TiSocialInstagram className="h-7 w-7 fill-gray-500" />
              <FaSquareXTwitter className="h-7 w-7 fill-gray-500" />
              <FaLinkedin className="h-7 w-7 fill-gray-500" />
            </div>
          </div>
          <p className="text-xs  items-center pt-2 lg:pt-0">
            Copyright © 2024 All rights reserved. / Privacy / Terms of Use /
            Cookie preferences / Do not sell my personal information / <span className="px-[1px] inline-block"><CiPlay1/></span> AdChoices
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer_link;
