import React from 'react'

const plans = [
    {
        title:"All Apps",
        cut_price:"₹4,630.32/mo",
        price_bold:"₹1,915.14/mo incl. GST",
        desc:"20+ apps for less than the cost of three apps at ₹733.96/mo  incl. GST each. Learn more",
        btn1:"Free trial",
        btn2:"Buy now",
        line_one:"See whats's Included",
        line_one_logo:"https://www.adobe.com/cc-shared/assets/img/product-icons/svg/express.svg",
        like_logo:"https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/perks-24.svg",
        like_text:"Tutorials, templates, fonts and more",
        cloud_logo:"https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/storage-24.svg",
        cloud_text:"100 GB cloud storage",
        line_two:"The premium version of Adobe Express",
        label:true,
        btn1_show:true,
        green:true
    },
    {
        title:"Photography",
        cut_price:"₹797.68/mo",
        price_bold:"₹318.60/mo incl. GST",
        desc:"The full version of Photoshop and  ",
        btn1:"Free trial",
        btn2:"Buy now",
        line_one:"",
        line_one_logo:"",
        like_logo:"https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/perks-24.svg",
        like_text:"Tutorials, templates, fonts and more",
        cloud_logo:"https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/storage-24.svg",
        cloud_text:"20 GB of cloud storage (1 TB available)",
        line_two:"Photoshop, Lightroom and Lightroom Classic",
        label:false,
        btn1_show:true,
        green:true
    },
    {
        title:"Single App",
        cut_price:"₹797.68/mo",
        price_bold:"₹318.60/mo incl. GST",
        desc:"Your choice of one Creative Cloud app.",
        btn1:"",
        btn2:"See plans & pricing",
        line_one:"",
        line_one_logo:"",
        like_logo:"https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/perks-24.svg",
        like_text:"Tutorials, templates, fonts and more",
        cloud_logo:"https://www.adobe.com/cc-shared/assets/img/feature-icons/svg/storage-24.svg",
        cloud_text:"100 GB cloud storage",
        line_two:"A single app of your choice",
        label:false,
        btn1_show:false,
        green:true
    }
]

const Individual = () => {

  return (
    <div className='flex flex-col gap-3 md:w-full py-9 md:flex-row md:justify-center'>
    {plans.map((items,i) => (
        <div key={i} className={items.green?`border border-green-700 md:w-[290px] outline-none rounded-2xl mx-6`:`border border-black outline-none rounded-2xl mx-1`}>
            <div className='py-[24px] relative md:py-[15px]'>
                {items.green? <div className='bg-green-600 text-white py-1 px-2 rounded-l-lg w-fit text-[12px] absolute right-[0] '>Best value</div> : ""}
            </div>
            <div className='py-1 px-6'>
                <h1 className='text-1xl font-medium'>{items.title}</h1>
                <p className='font-medium'><span className='text-[12px] font-normal mr-1'>{items.cut_price}</span>{items.price_bold}</p>
            </div>
            <p className='mt-6 mb-14 md:mb-7 py-1 px-6 md:text-[12px] md:text-wrap'>{items.desc}</p>
            <div className='flex gap-3 mb-4 py-1 px-[23px] md:justify-end'>
                {items.btn1_show?<button className='py-1 px-7 border-2 border-black font-semibold rounded-2xl md:text-[12px] md:px-3 md:py-[2px]'>{items.btn1}</button>:""}
                <button className='py-1 px-7 text-white bg-blue-500 rounded-2xl font-medium md:text-[12px] md:px-3 md:py-[2px]'>{items.btn2}</button>
            </div>

            <div className=''>
            <div className="one px-[24px] py-4 text-blue-500 text-sm border">{items.line_one}</div>
            <div className="two flex px-[24px] gap-4 py-2 items-center text-[13px] border">
                <img src={items.line_one_logo} alt="" className='h-8 md:h-7'/>
                <div className='md:text-[11px]'>{items.line_two}</div>
            </div>
            <div className="two flex px-[24px] gap-4 py-2 items-center text-[13px] border">
                <img src={items.like_logo} alt="" className='h-8 md:h-7'/>
                <div className='md:text-[11px]'>{items.like_text}</div>
            </div>
            <div className="two flex px-[24px] gap-4 py-2 items-center text-[13px] border border-b-transparent border-l-transparent">
                <img src={items.cloud_logo} alt="" className='h-8 md:h-7'/>
                <div className='md:text-[11px]'>{items.cloud_text}</div>
            </div>
            </div>
            
        </div>
    ))}
    </div>
  )
}

export default Individual