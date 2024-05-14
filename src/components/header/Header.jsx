import * as React from "react";
import logo from "../../hostflu-logo.png"
import "./header.css"
import { FaEnvelope, FaWhatsappSquare } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";
import { } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Navbar } from "./Navbar";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

export const Header = () => {
    const [bar, setBar] = useState(false)
    document.addEventListener("click", () => {
        if (bar) {
            setBar(false)
        }
    });
    const handleClick = (e) => {
        e.stopPropagation()
        setBar(!bar)
    }
    return (
        <>
            <header className=''>
                <div className="top-header py-1">
                    <div className="container mx-auto">
                        <ul className='flex justify-center md:justify-end items-center gap-5 md:gap-12 text-white text-sm md:text-lg'>
                            <li className=''><a href="https://wa.me/+8801719375526" className='flex items-center gap-2 md:gap-4'><span className="rotate-[270deg]"><FaWhatsappSquare /></span>+8801719375526</a></li>
                            <li className=''><a href="mailto:hostflu@gmail.com" className='hidden sm:flex items-center gap-2 md:gap-4'><FaEnvelope />Contact us</a></li>
                            <Link to="https://my.hostflu.com/register.php" target="_blank" className="border border-black border-opacity-40 hover:text-black hover:border-white duration-500 px-2 text-sm md:px-4 text-white rounded-md md:text-base">CLIENT PORTAL</Link>
                        </ul>
                    </div>
                </div>
            </header>
            {/* navbar */}
            <nav className='border-b border-primary border-opacity-20 py-3 sticky top-[-2px] bg-white z-50'>
                <div className="relative">
                    <div className="container mx-auto px-2">
                        <div className="navigation-menu flex justify-between items-center py-1">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="Logo" width='150' /></Link>
                            </div>
                            <div className={`absolute md:static top-full md:w-auto p-10 md:p-0 duration-500 bg-white w-full ${bar ? "left-0" : "-left-[3000px]"}`}>
                                <Navbar setBar={setBar} bar={bar}></Navbar>
                            </div>
                            <span className='block md:hidden text-3xl cursor-pointer' onClick={handleClick}>{bar ? <RxCross1 /> : <HiMiniBars3CenterLeft />}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
