import { } from '@lottiefiles/react-lottie-player'
import React, { useState } from 'react'
import PageBanner from '../../shared/pageBanner/PageBanner'
import wordpressAnimation from '../../../asstes/wordpressAnimation.json'
import customization from '../../../asstes/customization.png'

import data from '../../../data.json';
import PricingCard from '../../home/exclusive/PricingCard'
function WrodpressCustomization() {
    const cardData = data.exclusive;
    const firstThreeData = cardData.slice(0, 3);
    const secondthree = cardData.slice(3, 6);
    const thirdThree = cardData.slice(6, 9);
    const [tab, setTab] = useState(1);

    const handleclck = (tabNo) => {
        setTab(tabNo)
    }

    return (
        <main>
            <section className='py-20 bg-slate-200'>
                <PageBanner animationfile={wordpressAnimation} animationHeight="h-96" pageTitle={["Wordpress Customization"]}></PageBanner>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-7 items-center">
                        <div>
                            <img src={customization} alt="Word press customization" className="w-full md:max-w-[90%] p-2 sm:p-5 md:p-8 lg:p-10" />
                        </div>
                        <div>
                            <div>
                                <p className="md:text-xl md:leading-normal text-justify">
                                    HostFlu is a company specializing in WordPress customization, helping businesses improve their online presence. Our team of experienced professionals meets each client's unique needs through tailored solutions. We focus on both design and development, collaborating closely with clients to exceed expectations. HostFlu's process involves understanding the business, customizing themes, integrating plugins, and providing ongoing support. We emphasize the importance of WordPress customization, as it helps create a unique brand identity, enhances user experience, allows for scalability and flexibility, and improves search engine visibility. Our comprehensive services include theme customization, plugin development and integration, mobile responsiveness, e-commerce solutions, and content management. HostFlu is committed to affordability without compromising quality. Having five years of experience, we serve as a dependable ally for businesses aiming to boost their online presence. Reach out to HostFlu today to personalize your WordPress website and realize your business objectives. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* paricing table */}
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-4xl capitalize text-primary text-center font-semibold mb-14">Price Table</h2>
                    <div className="content">
                        {/* <h1 className='text-center text-4xl font-semibold text-[#1C1C1C]'>Our Exclisive Serverces</h1> */}
                        <div className="tabs-main mt-10 border-b">
                            <div className="tabs flex gap-5 justify-center">
                                <button onClick={(() => handleclck(1))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-4 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 1 ? "opacity-90" : "opacity-100"}`}>Shared Hosting</button>
                                <button onClick={(() => handleclck(2))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-4 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 2 ? "opacity-90" : "opacity-100"}`}>VPS</button>
                                <button onClick={(() => handleclck(3))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-4 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 3 ? "opacity-90" : "opacity-100"}`}>Email Hosting</button>
                            </div>
                        </div>
                        <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 1 ? "block" : "hidden"}`}>
                            {
                                firstThreeData.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                        <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 2 ? "block" : "hidden"}`}>
                            {
                                secondthree.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                        <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 3 ? "block" : "hidden"}`}>
                            {
                                thirdThree.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WrodpressCustomization