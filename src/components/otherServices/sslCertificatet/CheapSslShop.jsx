import React from 'react'
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa6";
import { ImCoinDollar } from "react-icons/im";

const CheapSslShop = () => {
    return (
        <section className='py-32 bg-slate-200 mb-32 text-white px-1 md:px-0'>
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl capitalize font-semibold mb-10 text-slate-600">Why cheapSSLShop?</h2>
                <div className='space-y-4 text-slate-600'>
                    <p className='md:text-xl'>Fastest, Trusted & cheapest SSL Provider</p>
                    <p className='md:text-md'>We dedicatedly strive to offer our client the best deals on ssl certificate from trustworthy CAS through hasle free services.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-7 mt-20'>
                    <div className="bg-white text-black rounded-md p-2 sm:p-4 md:p-8 lg:p-10 shadow-2xl">
                        <div className='space-y-6'>
                            <span><BsFillRocketTakeoffFill size={70} className='text-slate-500' /></span>
                            <h4 className='font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>Fastest Process</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex iure praesentium animi placeat, ipsum doloribus nam rerum quas deserunt culpa totam velit est reiciendis molestiae earum debitis ullam. Eaque dolores, necessitatibus, sapiente ex blanditiis magni architecto sed perferendis ut alias numquam nobis corporis ullam consequuntur cum veniam, amet odit.</p>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-md p-2 sm:p-4 md:p-8 lg:p-10 shadow-2xl">
                        <div className='space-y-6'>
                            <span><FaThumbsUp size={70} className='text-slate-500' /></span>
                            <h4 className='font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>Fastest Process</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex iure praesentium animi placeat, ipsum doloribus nam rerum quas deserunt culpa totam velit est reiciendis molestiae earum debitis ullam. Eaque dolores, necessitatibus, sapiente ex blanditiis magni architecto sed perferendis ut alias numquam nobis corporis ullam consequuntur cum veniam, amet odit.</p>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-md p-2 sm:p-4 md:p-8 lg:p-10 shadow-2xl">
                        <div className='space-y-6'>
                            <span><ImCoinDollar size={70} className='text-slate-500' /></span>
                            <h4 className='font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>Fastest Process</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex iure praesentium animi placeat, ipsum doloribus nam rerum quas deserunt culpa totam velit est reiciendis molestiae earum debitis ullam. Eaque dolores, necessitatibus, sapiente ex blanditiis magni architecto sed perferendis ut alias numquam nobis corporis ullam consequuntur cum veniam, amet odit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheapSslShop