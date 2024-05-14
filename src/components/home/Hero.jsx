import React from 'react'
import heroImg from "../../asstes/shutterstock.png"
import { BsFillCheckSquareFill } from 'react-icons/bs'
function Hero() {
    return (
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className="hero grid grid-cols-1 lg:grid-cols-3 gap-4 items-center px-3 md:px-0">
                    <div className='lg:col-span-2'>
                        <div className="hero-title">
                            <h1 className='text-2xl sm:text-4xl lg:text-7xl flex flex-col gap-5 font-bold'>
                                <span className='block text-primary'>Up To 20X</span>
                                <span className='block'>Faster Web hosting</span>
                                <span>to Help Your Succeed !</span>
                            </h1>
                            <p className='text-base text-black my-6 max-w-xl'>From our easy-to-use tools, to our free website migration, to our<br />
                                unmatched Guru Crew Support, we provide everything you
                                need to create a successful website.</p>
                            {/* list item hero */}
                            <ul className='space-y-5'>
                                <li className='flex gap-5'>
                                    <span className='text-2xl'><BsFillCheckSquareFill className='text-primary' /></span>
                                    <span>Cloud Backup</span>
                                </li>
                                <li className='flex gap-5'>
                                    <span className='text-2xl'><BsFillCheckSquareFill className='text-primary' /></span>
                                    <span>Server Security</span>
                                </li>
                                <li className='flex gap-5'>
                                    <span className='text-2xl'><BsFillCheckSquareFill className='text-primary' /></span>
                                    <span>Affordable Price</span>
                                </li>
                            </ul>
                            <div className="buttons mt-10 space-x-5">
                                <button className='hover:bg-slate-400 py-3 px-5 rounded-lg border bg-slate-200 duration-300 hover:text-white'>Get Serrated</button>
                                <button className='hover:bg-slate-400 py-3 px-5 rounded-lg border bg-slate-200 duration-300 hover:text-white'>Help Me Choose</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={heroImg} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero