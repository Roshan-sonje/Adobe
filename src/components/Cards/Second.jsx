import React from "react";
const card = [
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/acrobat-pro.svg",
    title: "Acrobat Pro",
    desc: "Create, edit, review and sign PDFs.",
    color: "bg-[#b30b00]",
    rounded: "rounded-lg",
    btn: true,
    btn_name: "Free trial",
    btn_color: "white",
  },
];

const img =
  "bg-[url(https://www.adobe.com/in/cc-shared/fragments/cco/media_173e564a912ca88e9973aa3a6573dec3bd51af299.png?width=2000&format=webply&optimize=medium)]";

const Card = ({
  logo,
  title,
  desc,
  btn1,
  btn2,
  color,
  sec_bg,
  btn1_Color,
  btn2_Color,
  btn2_Tcolor,
  text_Color,
}) => {
  return (
    <>
      <div
        className={`flex ${color} rounded-3xl overflow-hidden text-${text_Color}`}
      >
        <div
          className={
            color == img
              ? `${color} container flex flex-col gap-4 py-8 px-8 flex-wrap max-w-[350px] lg:min-w-[1040px] items-center rounded-xl bg-center bg-no-repeat`
              : `${color} container relative flex flex-col gap-4 py-8 px-8 flex-wrap max-w-[350px] rounded-xl`
          }
        >
          <div className="flex gap-3 items-center">
            {logo ? <img src={logo} alt={title} className="h-14 w-14" /> : ""}
            <h1 className="">{title}</h1>
          </div>
          <p className="text-[20px] font-medium">{desc}</p>
          <div className="flex flex-wrap gap-4 mb-[20px] md:mb-[70px]">
            <button
              className={`border-2 border-${btn1_Color} text-${btn1_Color} px-4 text-sm py-1 rounded-3xl`}
            >
              {btn1}
            </button>
            <button
              className={`bg-${btn2_Color} text-${btn2_Tcolor} px-4 text-sm py-1 rounded-3xl`}
            >
              {btn2}
            </button>
          </div>
        </div>

        <div className="hidden lg:block bg-center">
          <img src={sec_bg} alt="" className="bg-center h-[344px] " />
        </div>
      </div>
    </>
  );
};

const Secondd = () => {
  return (
    <>
      <h2 className="text-center font-semibold py-5 px-[30px] text-[21px]">
        Explore our most popular apps for creating anything you can imagine.
      </h2>
      <div className="container flex flex-wrap gap-5 justify-center mx-auto lg:px-20 px-5">
        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/lightroom.svg"
          title="Lightroom"
          desc="Best for brightening shots, boosting colours and organising photos."
          btn1="Learn more"
          btn2="Free trial"
          color="bg-[#033E6E]"
          btn1_Color="white"
          btn2_Color="white"
          btn2_Tcolor="black"
          text_Color="white"
        ></Card>

        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop.svg"
          title="Photoshop"
          desc="Best for major photo transformations."
          btn1="Learn more"
          btn2="Free trial"
          color="bg-[#3B9FFF]"
          sec_bg="https://www.adobe.com/in/cc-shared/fragments/cco/media_1b66e9e2bb48ba802dc96717c7dca452504e7ef6c.png?width=2000&format=webply&optimize=medium"
          btn1_Color="black"
          btn2_Color="black"
          btn2_Tcolor="white"
          text_Color="black"
        ></Card>

        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/express.svg"
          title="Adobe Express"
          desc="Best for quick photo edits like cropping and removing backgrounds."
          btn1="Learn more"
          btn2="Free trial"
          color="bg-[#001777]"
          sec_bg="/src/assets/adobe.png"
          btn1_Color="white"
          btn2_Color="white"
          btn2_Tcolor="black"
          text_Color="white"
        ></Card>

        <Card
          logo=""
          title=""
          desc="Not sure which apps are best for you? Take a minute. We’ll help you to figure it out."
          btn1="Get started"
          btn2=""
          color="bg-[url(https://www.adobe.com/in/cc-shared/fragments/cco/media_1e367b859b333ff35665f15cda478f59033d8cfaa.png?width=2000&format=webply&optimize=medium)]"
          btn1_Color="white"
          btn2_Color=""
          btn2_Tcolor=""
          text_Color="white"
        ></Card>

        {/* <Card
          logo=""
          title=""
          desc="Combine, retouch and remix your pics."
          btn1=""
          btn2=""
          color="bg-[url(https://www.adobe.com/in/cc-shared/fragments/cco/media_173e564a912ca88e9973aa3a6573dec3bd51af299.png?width=2000&format=webply&optimize=medium)]"
          btn1_Color=""
          btn2_Color=""
          btn2_Tcolor=""
          text_Color="black"
        ></Card> */}

        <div
          className={`w-full lg:mx-[150px] flex justify-center lg:py-[70px] bg-[url('/src/assets/bg-card.jpg')] bg-center md:bg-cover rounded-3xl overflow-hidden text-black px-7 py-[45px] md:px-[45px]`}
        >
          <div className=" flex flex-col items-center gap-3">
            <p className="text-sm lg:text-[16px] font-medium">MEMBER PERKS</p>
            <h1 className="text-[28px] lg:text-[35px] font-[600] text-center">25,000+ fonts</h1>
            <h1 className="text-[28px] lg:text-[35px] font-[600] text-center">Tutorials for all levels</h1>
            <h1 className="text-[28px] lg:text-[35px] font-[600] text-center px-7">1M+ free photos</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondd;
