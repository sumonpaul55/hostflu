import React, { useEffect, useState } from 'react'
import whmcs from "../../asstes/whmcs.png"
import cpanel from "../../asstes/cpanel.png"

function UserOriented() {
    const [userOriented, setUserOriented] = useState([])

    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => setUserOriented(data?.multipledata))
    }, [])
    // console.log(userOriented)
    return (
        <section className='py-20'>
            <div className="container mx-auto px-2">
                <div className="section-top text-center mb-20">
                    <h1 className='text-2xl md:text-[2.5rem] font-semibold text-center text-primary mb-9'>User Oriented Control Panel</h1>
                    <p>Intuitive and easy to use, cPanel help you to manage a web hosting account with maximum efficiency.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20'>
                    {
                        userOriented?.map((item) => (
                            <div className='flex gap-5' key={item.id}>
                                <div className='mt-2'>
                                    <img className='' src={item.url} alt={item.title} />
                                </div>
                                <div className='flex-1'>
                                    <h3 className="title text-2xl font-semibold">{item.title}</h3>
                                    <p className='mt-3'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="twoImg grid grid-cols-1 md:grid-cols-2 py-20 gap-10">
                    <div className='flex justify-center lg:justify-end lg:py-20 items-start'><img src={whmcs} className='md:w-9/12 h-full md:h-[130%]' alt="WhmCS" /></div>
                    <div className='flex lg:justify-start justify-center lg:py-20 items-start'><img src={cpanel} className='md:w-9/12 h-full md:h-[130%]' alt="cpanel" /></div>
                </div>
            </div>
        </section>
    )
}

export default UserOriented