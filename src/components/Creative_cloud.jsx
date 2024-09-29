import React from "react";
const img =
  "https://www.adobe.com/in/cc-shared/fragments/promos/2024/global/max-event-blade/media_17e5f68fc82710213189d0f8a432022af1b5e4f99.jpeg?width=2000&format=webply&optimize=medium";
const back_img =
  "https://www.adobe.com/in/cc-shared/fragments/cco/media_173e564a912ca88e9973aa3a6573dec3bd51af299.png?width=2000&format=webply&optimize=medium";
  const ba_img = "https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"

const cards = [
  {
    title: "Tutorials, fonts and stock images",
    one_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/tutorials-32.svg",
    one_text: "Tutorials for the basics and beyond",
    two_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/fonts-32.svg",
    two_text: "20,000+ fonts at your fingertips",
    three_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/stock-32.svg",
    three_text: "One million+ free photos, drawings, video clips, and more",
  },
  {
    title: "Tools for teamwork",
    one_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/collaborate.svg",
    one_text: "Creative ways to collaborate",
    two_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/libraries-32.svg",
    two_text: "Libraries to gather and share logos, images and brand elements",
    three_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/plug-in.svg",
    three_text: "Plugins to add more features to your favourite apps",
  },
  {
    title: "Creative community",
    one_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/behance-32.svg",
    one_text: "Behance — Show your stuff and see what others are doing",
    two_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/live-32.svg",
    two_text: "Adobe Live — Watch and learn from the pros",
    three_logo:
      "https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/portfolio-32.svg",
    three_text: "Adobe Portfolio — Design your own website in minutes",
  },
];
const Creative_cloud = () => {
  return (
    <div className="">
      <div className="bg-black w-full text-white flex flex-col py-6 px-[30px] sm:flex-row sm:gap-6 sm:items-center xl:py-6 md:justify-center">
        <img src={img} alt="" className="h-16 self-center mb-3 sm:h-24" />
        <div className="flex flex-col gap-1 ">
          <h1 className="font-bold md:text-sm">Get ready for Adobe MAX.</h1>
          <p className="md:text-sm">
            Join us for the creative event of the year. Oct 15-16
          </p>
          <button className="mt-5 w-fit py-1 px-3 border-white border-2 font-semibold rounded-3xl md:text-xs md:py-[2px]">
            Register now
          </button>
        </div>
      </div>

      <div
        className={`bg-[url(${back_img})] bg-[top_right_-700px] bg-cover px-8 py-9 flex lg:flex-col xl:bg-no-repeat xl xl:bg-center`}
      >
        

        <div className="mt-5 flex flex-col md:flex-row gap-4 md:flex-wrap md:px-11 justify-center">
        <div className="flex flex-col gap-3 xl:ml-[250px] xl:mr-[80px]">
          <h1 className="text-[25px] font-semibold text-center leading-9">
            Your Creative Cloud plan comes with more than great apps.
          </h1>
          <p className="text-center ">
            Membership perks include tutorials, fonts, templates and more.
          </p>
        </div>
          {cards.map((items,i) => (
            <div key={i} className="bg-white flex flex-col py-6 px-5 rounded-2xl gap-3 pb-9 min-h-[280px] flex-wrap xl:w-[350px]">
              <h1 className="font-semibold">{items.title}</h1>
              <div className="flex gap-3">
                <img src={items.one_logo} alt="" className="h-7"/>
                <p className="text-[13px] font-medium">{items.one_text}</p>
              </div>
              <div className="flex gap-3">
                <img src={items.two_logo} alt="" className="h-7"/>
                <p className="text-[13px] font-medium">{items.two_text}</p>
              </div>
              <div className="flex gap-3">
                <img src={items.three_logo} alt="" className="h-7"/>
                <p className="text-[13px] font-medium text-wrap">{items.three_text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creative_cloud;
