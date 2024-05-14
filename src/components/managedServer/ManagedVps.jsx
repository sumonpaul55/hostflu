import React, { useEffect, useState } from 'react';
import managedvpsAnimation from "../../asstes/managedvpsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';
import director from "../../asstes/direction.png";
import PricingCard from '../home/exclusive/PricingCard';
import manageVps from "../../asstes/manageVps.png"
import { FaChalkboardTeacher, FaCheck } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { TbSettingsSearch } from "react-icons/tb";
import { PiHandHeartBold } from "react-icons/pi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";

const ManagedServer = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => setCardData(data.exclusive))
    }, [])
    const firstThreeData = cardData?.slice(0, 3);
    const secondthree = cardData?.slice(3, 6);
    const [toggle, setToggle] = useState(true);
    const toggleHandler = () => {
        setToggle(!toggle)
    }
    return (
        <main>
            <section className='bg-slate-200'>
                <PageBanner animationfile={managedvpsAnimation} animationHeight={"sm:h-[500px]"} pageTitle={["Hassle-Free anaged VPS ", <span className='text-primary' key={1}>H</span>, "osting"]} animationName=""></PageBanner>
            </section>
            <section className='px-1 py-28 bg-slate-50' id='packeg'>
                <div>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>MANAGE VPS HOSTING PLANS</h1>
                </div>
                <div className="container mx-auto px-2">
                    <div className="text-center">
                        {/* <h2 className='text-xl md:text-2xl'>Discover the Perfect Hosting Plan for Your Business</h2>
                        <h4 className='text-base md:text-xl my-5'>Discover the Perfect Hosting Plan for Your Business</h4> */}
                        {/* toggle buttons */}
                        <div className='flex items-center justify-center gap-2 md:gap-6 my-14'>
                            <span className={`font-normal ${toggle ? "text-gray-500" : "text-primary"}`}>Billed Monthly</span>
                            <button className={`w-20 rounded-full bg-primary h-10 border-4 border-gray-300 flex ${toggle ? "justify-end" : "justify-start"}`} onClick={toggleHandler}>
                                <span className='h-8 bg-white w-8 block rounded-full'></span>
                            </button>
                            <span className={`font-normal ${toggle ? "text-primary" : "text-gray-500"}`}>Billed Annually</span>
                            <div className='p-2 bg-[#ff9e0333] px-5 rounded-full border border-primary relative -top-7 -right-4'>
                                <span>5% OFF</span>
                                <img src={director} alt="director" className='absolute -left-10 w-10 top-5' />
                            </div>
                        </div>
                    </div>
                    {/* pricing cards */}
                    <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "grid" : "hidden"}`} id='mini-package'>
                        {
                            firstThreeData.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                    <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "hidden" : "grid"}`}>
                        {
                            secondthree.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='bg-slate-200 py-20 px-1'>
                <div className="container mx-auto">
                    <div className='max-w-[900px] mx-auto'>
                        <div className='flex justify-evenly flex-wrap'>
                            <div className='flex items-center gap-2 py-2'>
                                <span><FaChalkboardTeacher size={30} /></span>
                                <h2 className='text-xl md:text-xl'>Full Control Panel</h2>
                            </div>
                            {/* horizontal border */}
                            <div className='border-r-4 py-2 sm:border-slate-500'></div>

                            <div className='flex items-center gap-2 py-2'>
                                <span><FaCheck size={30} /></span>
                                <h2 className='text-xl md:text-xl'>99.99% Uptime</h2>
                            </div>
                            {/* horizontal border */}
                            <div className='border-r-4 py-2 sm:border-slate-500'></div>

                            <div className='flex items-center gap-2 py-2'>
                                <span><FaUsersCog size={30} /></span>
                                <h2 className='text-xl md:text-xl'>24/7 Technical Support</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#F6F6F6] py-20'>
                <div className="container mx-auto px-2">
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Managed VPS hosting</h1>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 items-center">
                        <div className='md:col-span-3' data-aos="fade-right">
                            <p className='text-justify sm:font-extralight md:leading-8 mt-0 md:mt-20 md:text-lg'>
                                Effectively managing a Virtual Private Server (VPS) requires a skillful balance of strategic planning and technical proficiency. Whether you're a seasoned administrator or new to the realm of VPS, this comprehensive guide equips you with essential insights for a seamless and secure virtual environment. Begin by selecting a reliable VPS provider such as AWS, DigitalOcean, or Linode, focusing on performance, reliability, and customer support. Once acquired, initiate the VPS setup with SSH Key Authentication, regular system updates, and firewall configuration for heightened security. Tailor your VPS environment by installing critical software components like web servers (e.g., Nginx or Apache), database servers (e.g., MySQL or PostgreSQL), and version control tools (e.g., Git) for efficient development workflows. Ongoing monitoring of resource usage, log analysis, and strategic optimization techniques ensure your VPS operates at peak performance, allowing you to navigate the intricacies of VPS management with confidence and expertise.
                            </p>
                        </div>
                        <div className='md:col-span-2' data-aos="fade-left">
                            <img src={manageVps} alt="manageVps" className='w-full md:w-2/3 mx-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 bg-slate-50'>
                <div className="container mx-auto">
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>Features are part of every plan.</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'>
                            {/* Features are part of every plan. */}
                            <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                <div className='space-y-5'>
                                    <div className='flex items-center justify-center pb-5 text-slate-400'>
                                        <TbSettingsSearch size={150} />
                                    </div>
                                    <h2 className='font-bold text-lg md:text-xl'>High Performance</h2>
                                    <p className='leading-loose'>Our Managed VPS services are optimized for speed and performance. With dedicated resources, clients can enjoy fast loading times and a responsive online presence, contributing to a positive user experience.</p>
                                </div>
                                {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                            </div>
                            <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                <div className='space-y-5'>
                                    <div className='flex items-center justify-center pb-5 text-slate-400'>
                                        <PiHandHeartBold size={150} />
                                    </div>
                                    <h2 className='font-bold text-lg md:text-xl'>User-Friendly Control Panel</h2>
                                    <p className='leading-loose'>We provide an intuitive control panel that allows clients to manage their VPS easily. From deploying applications to monitoring performance, the user-friendly interface puts control at clients' fingertips.</p>
                                </div>
                                {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                            </div>
                            <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                <div className='space-y-5'>
                                    <div className='flex items-center justify-center pb-5 text-slate-400'>
                                        <FaHandshakeSimple size={150} />
                                    </div>
                                    <h2 className='font-bold text-lg md:text-xl'>24/7 Technical Support</h2>
                                    <p className='leading-loose'>Our support team is available around the clock, ready to assist clients with any challenges they may encounter.</p>
                                </div>
                                {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                            </div>
                            <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                <div className='space-y-5'>
                                    <div className='flex items-center justify-center pb-5 text-slate-400'>
                                        <IoBookSharp size={150} />
                                    </div>
                                    <h2 className='font-bold text-lg md:text-xl'>Enhanced Security Measures</h2>
                                    <p className='leading-loose'>Our employs robust security measures, including regular updates, firewalls, and proactive monitoring, to safeguard clients' data and ensure a secure hosting environment.</p>
                                </div>
                                {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default ManagedServer;