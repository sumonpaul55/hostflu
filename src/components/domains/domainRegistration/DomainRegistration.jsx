import React from 'react'
import PageBanner from '../../shared/pageBanner/PageBanner'
import domainregistration from "../../../asstes/domainregistration.json"
import DomainSeach from '../../home/domainSeach'
import domainRegistration from "../../../asstes/domainregistration.svg"
import productService from "../../../asstes/productService.svg"
import easySetup from "../../../asstes/easySetup.svg"
function DomainRegistration() {
    return (
        <main>
            <section className='bg-slate-100'>
                <PageBanner animationfile={domainregistration} animationPadding="p-5" animationHeight={"sm:h-[500px]"} pageTitle={["Register ", <span className='text-primary'> D</span>, "omain for your Business"]}></PageBanner>
            </section>
            <section>
                <DomainSeach></DomainSeach>
            </section>
            <section className="py-20 px-1 bg-slate-100">
                <div className="container mx-auto">
                    <h1 className='text-xl md:text-3xl text-center text-slate-700 font-semibold'>3 reasons to register today</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-9 mt-20'>
                        <div className='text-center border p-2 md:py-5 rounded-md space-y-5 px-20 bg-white shadow-lg shadow-slate-200'>
                            <img src={domainRegistration} alt="domainRegistration" className='w-32 mx-auto' />
                            <p className='font-bold md:text-xl text-slate-700'>Domains with competitive pricing are widely favored.</p>
                            <p>Discover budget-friendly top-level domains with our search tool and enjoy cost savings!</p>
                        </div>
                        <div className='text-center border p-2 md:py-5 rounded-md space-y-5 px-20 bg-white shadow-lg shadow-slate-200'>
                            <img src={productService} alt="domainRegistration" className='w-32 mx-auto' />
                            <p className='font-bold md:text-xl text-slate-700'>Effortless setup and useful guidance.</p>
                            <p>Utilize our user-friendly Control Panel for seamless domain name management, and receive valuable guidance from our experts.</p>
                        </div>
                        <div className='text-center border p-2 md:py-5 rounded-md space-y-5 px-20 bg-white shadow-lg shadow-slate-200'>
                            <img src={easySetup} alt="domainRegistration" className='w-32 mx-auto' />
                            <p className='font-bold md:text-xl text-slate-700'>Complimentary products and services upon registration.</p>
                            <p>Receive complimentary privacy protection, free DNS for life, and many additional benefits.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DomainRegistration