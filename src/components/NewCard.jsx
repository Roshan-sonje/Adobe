import React from "react";

const Card = ({
  logo,
  title,
  desc,
  btn1,
  btn1_Color,
  btn2,
  btn2_Color,
  color,
  sec_bg,
  text_Color,
  btn2_Tcolor
}) => {
  return (
    <>
      <div className="flex">
        <div
          className={`${color} text-${text_Color} container flex flex-col gap-4 py-8 px-8 flex-wrap max-w-[350px] rounded-xl`}
        >
          <div className="flex gap-3 items-center">
            <img src={logo} alt={title} className="h-14 w-14" />
            <h1 className="">{title}</h1>
          </div>
          <p className="text-[20px] font-medium">{desc}</p>
          <div className="flex flex-wrap gap-4 mb-[20px] md:mb-[70px]">
            <button
              className={`border-2 text-${btn1_Color} border-${btn1_Color} px-4 text-sm py-1 rounded-3xl`}
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
          <img
            src={sec_bg}
            alt=""
            className="bg-center h-[313px] translate-x-[-8px]"
          />
        </div>
      </div>
    </>
  );
};

const NewCard = () => {
  return (
    <>
      <h2 className="text-center font-semibold py-5 px-[30px] text-[21px]">
        Explore our most popular apps for creating anything you can imagine.
      </h2>
      <div className="container flex flex-wrap gap-5 justify-center mx-auto lg:px-20 px-5">
        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/express.svg"
          title="Adobe Express"
          desc="Your all-in one AI content creation app."
          btn1="Learn more"
          btn1_Color="white"
          btn2=""
          btn2_Color=""
          btn2_Tcolor=""
          color="bg-[#001777]"
          text_Color="white"
        ></Card>

        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop.svg"
          title="Photoshop"
          desc="Combine, retouch and remix your pics."
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
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg"
          title="Premiere Pro"
          desc="Edit, trim and craft your videos."
          btn1="Learn more"
          btn2="Free trial"
          color="bg-[#9999FF]"
          sec_bg="https://www.adobe.com/in/cc-shared/fragments/cco/media_1c3025f71bb8f66b276aa10f1b9c754fc23b935cd.png?width=2000&format=webply&optimize=medium"
          btn1_Color="black"
          btn2_Color="black"
          btn2_Tcolor="white"
          text_Color="black"
        ></Card>

        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator.svg"
          title="Illustrator"
          desc="Create logos, designs, graphics and more."
          btn1="Learn more"
          btn2="Free trial"
          color="bg-[#FF9500]"
          btn1_Color="black"
          btn2_Color="black"
          btn2_Tcolor="white"
          text_Color="black"
        ></Card>

        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/acrobat-pro.svg"
          title="Acrobat Pro"
          desc="Create, edit, review and sign PDFs."
          btn1="Learn more"
          btn2="Free trial"
          color="bg-[#B30B00]"
          btn1_Color="white"
          btn2_Color="white"
          btn2_Tcolor="black"
          text_Color="white"
        ></Card>

        <Card
          logo="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/firefly-appicon-55.svg"
          title="Adobe Firefly"
          desc="Create beautiful images in just a few words."
          btn1="Learn more"
          btn2="Explore Firefly for free"
          color="bg-[#F6BC8E]"
          sec_bg="https://www.adobe.com/in/cc-shared/fragments/cco/media_169edf086fd52777d030f4eb42e8ac6d7e60801fa.png?width=2000&format=webply&optimize=medium"
          btn1_Color="black"
          btn2_Color="black"
          btn2_Tcolor="white"
          text_Color="black"
        ></Card>
      </div>
    </>
  );
};

export default NewCard;
