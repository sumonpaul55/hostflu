import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const ResellerHosting = () => {
    // const [resellerData, setResellerData] = useState([])
    // const firstThreeData = cardData.slice(0, 3);
    // const secondthree = cardData.slice(3, 6);
    const [toggle, setToggle] = useState(true);

    const toggleHandler = () => {
        setToggle(!toggle)
    }
    // useEffect(() => {
    //     fetch("data.json")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <main>
            <section className='bg-gray-100 py-10'>

            </section>
            <section className='py-28 bg-white' id='packeg'>
                <div className="container mx-auto px-2">
                    <div className="text-center">
                        <h2 className='text-xl md:text-2xl'>Discover the Perfect Hosting Plan for Your Business</h2>
                        <h4 className='text-base md:text-xl my-5'>Discover the Perfect Hosting Plan for Your Business</h4>
                        {/* toggle buttons */}
                        <div className='flex items-center justify-center gap-2 md:gap-6 my-14'>
                            <span className={`font-normal ${toggle ? "text-gray-500" : "text-primary"}`}>Billed Monthly</span>
                            <button className={`w-20 rounded-full bg-primary h-10 border-4 border-gray-300 flex ${toggle ? "justify-end" : "justify-start"}`} onClick={toggleHandler}>
                                <span className='h-8 bg-white w-8 block rounded-full'></span>
                            </button>
                            <span className={`font-normal ${toggle ? "text-primary" : "text-gray-500"}`}>Billed Annually</span>
                            <div className='p-2 bg-[#ff9e0333] px-5 rounded-full border border-primary relative -top-7 -right-4'>
                                <span>5% OFF</span>
                                {/* <img src={director} alt="director" className='absolute -left-10 w-10 top-5' /> */}
                            </div>
                        </div>
                    </div>
                    {/* pricing cards */}
                    <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "grid" : "hidden"}`} id='mini-package'>
                        {
                            // firstThreeData.map((cardItem) => (
                            //     <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            // ))
                        }
                    </div>
                    <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "hidden" : "grid"}`}>
                        {
                            // secondthree.map((cardItem) => (
                            //     <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            // ))
                        }
                    </div>
                </div>
                {/* container */}
            </section>
        </main>
    );
};

export default ResellerHosting;