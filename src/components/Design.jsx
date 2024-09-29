import React from "react";

const Card = ({ title, description, button1Text, button2Text, imageSrc, bgColor }) => {
  return (
    <div className={`flex flex-col justify-between rounded-lg shadow-md p-6 ${bgColor} text-white`}>
      <div>
        <img src={imageSrc} alt={title} className="mb-4 w-12 h-12" />
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      <div className="mt-auto">
        {button1Text && <button className="bg-white text-black px-4 py-2 rounded-md">{button1Text}</button>}
        {button2Text && <button className="bg-black text-white px-4 py-2 rounded-md ml-2">{button2Text}</button>}
      </div>
    </div>
  );
};

const Design = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-10">
      <Card
        title="Adobe Express"
        description="Your all-in-one AI content creation app."
        button1Text="Learn more"
        button2Text="Free trial"
        imageSrc="https://path-to-your-express-icon"
        bgColor="bg-blue-800"
      />
      <Card
        title="Photoshop"
        description="Combine, retouch and remix your pics."
        button1Text="Learn more"
        button2Text="Free trial"
        imageSrc="https://www.adobe.com/in/cc-shared/fragments/cco/media_1b66e9e2bb48ba802dc96717c7dca452504e7ef6c.png?width=2000&format=webply&optimize=medium"
        bgColor="bg-blue-500"
      />
      <Card
        title="Premiere Pro"
        description="Edit, trim and craft your videos."
        button1Text="Learn more"
        button2Text="Free trial"
        imageSrc="https://path-to-your-premiere-icon"
        bgColor="bg-purple-500"
      />
      <Card
        title="Illustrator"
        description="Create logos, designs, graphics and more."
        button1Text="Learn more"
        button2Text="Free trial"
        imageSrc="https://path-to-your-illustrator-icon"
        bgColor="bg-orange-500"
      />
      <Card
        title="Acrobat Pro"
        description="Create, edit, review and sign PDFs."
        button1Text="Learn more"
        button2Text="Free trial"
        imageSrc="https://path-to-your-acrobat-icon"
        bgColor="bg-red-600"
      />
      <Card
        title="Adobe Firefly"
        description="Create beautiful images in just a few words."
        button1Text="Learn more"
        button2Text="Explore Firefly for free"
        imageSrc="https://path-to-your-firefly-icon"
        bgColor="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
      />
    </div>
  );
};

export default Design;
