import React, { useEffect, useState } from 'react'
import supportImg from "../../asstes/support.png"
function WhyChoseUsSupport() {
    const [ourService, setOurService] = useState([])
    // const ourService = data.choseService;
    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => setOurService(data?.choseService))
    }, [])
    return (
        <>
            <section className='py-20'>
                <div className="container mx-auto px-2">
                    <h1 className='text-center text-2xl md:text-4xl mb-20 font-semibold'>Why Choose Our Service !</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 lg:gap-20'>
                        {
                            ourService?.map((data) => (
                                <div className='py-4 sm:py-10 px-1 sm:px-10 lg:px-20 text-center serviceBox rounded-lg cursor-pointer' key={data.id}>
                                    <img src={`${data.icon}`} className='mx-auto' alt={data.title} />
                                    <h2 className='text-md md:text-2xl my-4 font-semibold'>{data.title}</h2>
                                    <p>{data.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='py-20 support-bg mb-10'>
                <div className="container mx-auto px-2">
                    <div className="support grid grid-cols-2 justify-center items-center">
                        <div>
                            <h2 className='text-2xl md:text-4xl text-white mb-9'>Support</h2>
                            <p className='text-white'>
                                We know how important it is to have reliable and fast domain hosting services for your online presence. That’s why we offer 24/7 days support to our customers.
                            </p>
                        </div>
                        <div className='text-center'>
                            <img src={supportImg} alt='' className='ml-auto' width="200" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChoseUsSupport