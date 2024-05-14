import React, { useEffect, useState } from 'react'
import termsAnimation from "../../asstes/termsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import termsandService from "../../asstes/termsandService.jpg"
import 'react-tabs/style/react-tabs.css';
import "./termsofService.css"
function TermsOfService() {
    const [tabNumber, setTabNumber] = useState(0);
    const [termsData, setTermsData] = useState([])

    useEffect(() => {
        fetch("termsandConditions.json")
            .then(res => res.json())
            .then(data => setTermsData(data))
    }, [])

    const handleTab = (newTabNumber) => {
        setTabNumber(newTabNumber);
    };
    const termsTab = document.querySelector("#termsTab ul")?.childNodes;
    const handleNext = () => {
        const newTabNumber = (tabNumber + 1); // Assuming you have 2 tabs
        setTabNumber(newTabNumber);
        if (tabNumber > termsTab.length - 2) {
            setTabNumber(0)
        }
    };
    const handlePrev = () => {
        const newTabNumber = (tabNumber - 1); // Assuming you have 2 tabs
        setTabNumber(newTabNumber);
        if (tabNumber < 1) {
            setTabNumber(termsTab.length - 1)
        }
    };

    // console.log(tabNumber, "from outside")
    return (
        <main>
            <section className=''>
                <div className='bg-slate-300'>
                    <PageBanner animationfile={termsAnimation} animationPadding={"p-2 lg:p-10"} pageTitle={["Terms Of ", <span key={500} className='text-primary'>S</span>, "ervices ", "And Conditions"]}></PageBanner>
                </div>
            </section>
            <section className='py-20'>
                <div className="container mx-auto">
                    <div className='rounded-md border p-3 md:p-100' id='termsTab'>
                        <h3 className='text-xl md:text-3xl lg:text-4xl text-slate-700 mb-14 font-semibold text-center'>Terms of Our Services</h3>
                        <Tabs selectedIndex={tabNumber} onSelect={handleTab} className="flex gap-10 flex-col md:flex-row">
                            <TabList className="flex md:flex-col md:w-3/12 flex-wrap gap-4 md:gap-7 md:border-r px-2 md:px-7">
                                {
                                    termsData?.map((items, idx) => (
                                        <Tab key={idx} className="border-none cursor-pointer text-lg lg:whitespace-nowrap outline-none">{items?.headings}</Tab>
                                    ))
                                }
                            </TabList>
                            <div>
                                {
                                    termsData?.map((items, idx) => (
                                        <TabPanel key={idx}>
                                            <h3 className='text-xl font-semibold mb-6'>{idx + 1}. {items?.headings}</h3>
                                            <p className='text-slate-700 leading-8 text-lg'>{items?.explain}</p>
                                        </TabPanel>
                                    ))
                                }
                                <div className='mt-6 flex gap-10'>
                                    <button className='px-10 py-2 bg-slate-500 text-white rounded-full' onClick={handlePrev}>prev</button>
                                    <button className='px-10 py-2 bg-slate-500 text-white rounded-full' onClick={handleNext}>next</button>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
            <section className='py-32 bg-slate-50'>
                <div className="container mx-auto">
                    <img src={termsandService} className='w-full rounded-lg' alt="" />
                </div>
            </section>
        </main>
    )
}

export default TermsOfService