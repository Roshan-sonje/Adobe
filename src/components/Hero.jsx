import React from "react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-11">
        <div className="flex flex-col items-center md:leading-[81px]">
          <h1 className="text-[39px] px-9 text-center font-bold md:text-[60px]">This is Creative Cloud.</h1>
          <h1 className="text-[39px] px-9 text-center font-bold md:text-[60px]">Save 58% today.</h1>
        </div>
        <p className="px-9 text-[17px] lg:text-[14px] mt-2 font-[400] text-center md:px-[25%]">
          Get the complete toolkit for creativity, including Photoshop, Premiere
          Pro, Acrobat Pro, Adobe Express, and generative AI features. Now only
          ₹4,630.32/mo ₹1,915.14/mo incl. GST.
        </p>

        <div className="btn justify-center flex-wrap flex gap-4 items-center mt-4" >
          <div className="flex gap-1 border text-sm border-black font-semibold py-2 md:py-3 px-4 rounded-3xl">
            <svg
              id="arrow-down"
              width={15}
              viewBox="0 0 18 18"
              className="icon-milo icon-milo-arrow-down"
            >
              <path
                fill="currentcolor"
                d="M12,10V1.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V10H2.5035a.25.25,0,0,0-.177.427L9,17.1l6.673-6.673A.25.25,0,0,0,15.4965,10Z"
              ></path>
            </svg>
            View plans and pricing
          </div>
          <div className="text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-3xl">Start free trial</div>
        </div>

        <div className="text-[16px] mt-2 text-center font-medium px-[26px]">See plans for <span className="underline">students and teachers</span> or <span className="underline">small and medium businesses.</span></div>

        <video className="mt-4" onMouseEnter={onplay} onMouseLeave={onpause}>
          <source
            src="https://www.adobe.com/creativecloud/media_1167374e3354ef57f126fa78a55cbc1708ac4babd.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </>
  );
};

export default Hero;
