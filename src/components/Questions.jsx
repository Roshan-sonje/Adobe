import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";

const qn = [{
    title:"What is Adobe Creative Cloud?",
    desc:"Adobe Creative Cloud provides apps, web services and resources for all your creative projects — photography, graphic design, video editing, UX design, drawing and painting, social media and more. Build your own plan with individual app subscriptions or subscribe to the Creative Cloud All Apps plan. Learn more about the apps in Adobe Creative Cloud."
},
{
    title:"What is Adobe Creative Cloud pricing?",
    desc:"The cost of Creative Cloud depends on the plan you choose. As a single app, Creative Cloud costs ₹1,834.90/mo ₹733.96/mo for individuals and ₹2,873.30/mo per licence for teams. You can also get Creative Cloud in the Creative Cloud All Apps plan, which comes with 20+ additional creative apps like Photoshop and After Effects. The All Apps plan costs ₹4,630.32/mo ₹1,915.14/mo for individuals, ₹1,596.54/mo ₹638.38/mo for the first year for students who meet the eligibility requirement and ₹5,750.00/mo ₹3,788.00/mo per licence for the first year for teams for the first year for teams. See terms. All options give you access to all the latest Creative Cloud features and updates, Frame.io for Creative Cloud, an Adobe Express Premium plan and 100 GB of cloud storage. You can start with a seven-day free trial of Creative Cloud or see plans and pricing."
},
{
    title:"Is Adobe Creative Cloud free?",
    desc:"Adobe offers a free Creative Cloud membership that includes the free Adobe Express plan, mobile apps and fonts. You can add Single App plans or subscribe to the Creative Cloud All Apps plan at any time. Explore the free Adobe Creative Cloud membership."
},
{
    title:"What is Adobe Creative Cloud used for?",
    desc:"Adobe Creative Cloud helps you to bring your creative projects to life in photography, graphic design, video editing, UX design, drawing and painting, social media and more. Learn about Adobe Creative Cloud plans and pricing."
},
{
    title:"What is the Adobe Creative Cloud All Apps Plan?",
    desc:"Creative Cloud All Apps is a subscription plan that includes more than 20 creative apps, including Photoshop, Premiere Pro, Illustrator, InDesign, Audition and After Effects. You also get Adobe Fonts, thousands of free assets in Adobe Stock, templates, 100 GB of cloud storage and more. See what you get in the Adobe Creative Cloud All Apps plan."
},
{
    title:"How do I download and install Adobe Creative Cloud?",
    desc:"Start your Adobe Creative Cloud downloads by installing the Adobe Creative Cloud desktop app or signing into Adobe Creative Cloud online. You can manage your subscription from the log in page. Download and install Adobe Creative Cloud."
},
{
    title:"Are Substance 3D products included in the Adobe Creative Cloud All Apps plan?",
    desc:"No. Substance 3D products are sold exclusively in a Substance 3D plan."
}]

const Questions = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (items) => {
        if(selected == items){
            return setSelected(null)
        }
        setSelected(items)
    }
  return (
    <div className='flex items-center flex-col px-[35px] md:pb-[100px] bg-[#f5f5f5]'>
        <h1 className='text-[20px] font-semibold py-6'>Questions? We have answers.</h1>

        <div className=''>
            {qn.map((items,i) => (
                <div key={i} className='xl:w-[800px]'>
                    <div className='flex border-t-2 border-black border-x-transparent py-6 justify-between items-center xl:pl-3'>
                        <NavLink onClick={()=> toggle(items)} className='font-medium'>{items.title}</NavLink>
                        {selected === items? <FiMinus onClick={() => toggle(items)} className='min-h-5 min-w-5 mx-1 '/> : <GoPlus onClick={() => toggle(items)} className='min-h-5 min-w-5 mx-1 transition-all duration-200'/>}
                    </div>
                    {selected == items? <div className=''><p className=' text-[14px] pb-4 px-5 transition-all duration-150'>{items.desc}</p></div> : ""}
                
                </div>
            ))}
        </div>
    </div>
  )
}

export default Questions

