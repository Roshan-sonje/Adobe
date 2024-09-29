import React from "react";
const card = [
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/express.svg",
    title: "Adobe Express",
    desc: "Your all-in one AI content creation app.",
    color: "bg-[#001777]",
    rounded: "rounded-lg",
    btn: false,
    
  },
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop.svg",
    title: "Photoshop",
    desc: "Combine, retouch and remix your pics.",
    color: "bg-[#3b9fff]",
    img: "https://www.adobe.com/in/cc-shared/fragments/cco/media_1b66e9e2bb48ba802dc96717c7dca452504e7ef6c.png?width=2000&format=webply&optimize=medium",
    rounded: "rounded-l-lg",
    btn: true,
    btn_name: "Free trial",
    btn_color: "black"
  },
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg",
    title: "Premiere Pro",
    desc: "Edit, trim and craft your videos.",
    color: "bg-[#9999ff]",
    img: "https://www.adobe.com/in/cc-shared/fragments/cco/media_1c3025f71bb8f66b276aa10f1b9c754fc23b935cd.png?width=2000&format=webply&optimize=medium",
    rounded: "rounded-l-lg",
    btn: true,
    btn_name: "Free trial",
    btn_color: "black"
  },
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator.svg",
    title: "Illustrator",
    desc: "Create logos, designs, graphics and more.",
    color: "bg-[#ff9500]",
    rounded: "rounded-lg",
    btn: true,
    btn_name: "Free trial",
    btn_color: "black"
  },
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/acrobat-pro.svg",
    title: "Acrobat Pro",
    desc: "Create, edit, review and sign PDFs.",
    color: "bg-[#b30b00]",
    rounded: "rounded-lg",
    btn: true,
    btn_name: "Free trial",
    btn_color: "white"
  },
  {
    logo: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/firefly-appicon-55.svg",
    title: "Adobe Firefly",
    desc: "Create beautiful images in just a few words.",
    color: "bg-[#f3bd9b]",
    img: "https://www.adobe.com/in/cc-shared/fragments/cco/media_169edf086fd52777d030f4eb42e8ac6d7e60801fa.png?width=2000&format=webply&optimize=medium",
    rounded: "rounded-l-lg",
    btn: true,
    btn_name: "Explore Firefly for free",
    btn_color: "black"
  },
];
const First = () => {
  return (
    <>
      <h2 className="text-center font-semibold py-5 px-[30px] text-[21px]">
        Explore our most popular apps for creating anything you can imagine.
      </h2>
      <div className="flex flex-wrap justify-center gap-4 xl:px-[5%]">
        {card.map((items) => (
          <div className="flex px-[20px] ">
            <div
              className={`  min-w-[260px] xl:px-[8%] xl:w-[200px]  pl-7 flex-wrap  flex-start pt-7 sm:pb-[80px] flex flex-col gap-4 one ${items.color} text-white rounded-xl lg:${items.rounded}`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-4">
                <img src={items.logo} alt="Adobe Express" className="md:h-11 h-12" />
                <h1 className="text-[17px] font-semibold">{items.title}</h1>
                <h1 className="text-[21px] inline text-wrap font-bold pr-[60px]">
                {items.desc}
              </h1>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <button className="w-fit border border-white rounded-3xl py-1 px-3 text-[13px] font-semibold hover:text-black hover:border-black hover:bg-white">
                  Learn more
                </button>
                {items.btn? <button className={`w-fit bg-${items.btn_color} rounded-3xl py-1 px-3 text-[13px] font-semibold hover:text-white hover:border-black hover:bg-gray-700`}>
                  {items.btn_name}
                </button> : <div></div>}
              </div>
              </div>

              <div className="hidden xl:block">
                <img src={items.img} alt="" className="h-[284px] flex z-20" />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default First;
