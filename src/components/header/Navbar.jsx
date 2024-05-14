import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
// import { FaEnvelope } from "react-icons/fa";

export const Navbar = ({ setBar, bar }) => {
    const [dropdown, setDropdown] = useState(null);
    // const [higlight, setHiglight] = useState("")
    const handleNav = (e, navNo) => {
        e.stopPropagation();
        if (dropdown === navNo) {
            setDropdown(null);
        }
        else {
            setDropdown(navNo)
        }

        if (window.innerWidth > 768) {
            setDropdown(null)
        };
    }
    // hide bar afte clicking menu items
    const handleHideDrpdown = () => {
        setBar(!bar)
    }
    // const handlePackage = (pack) => {
    //     setTimeout(() => {
    //         const anchor = document.querySelector('#mini-package')
    //         anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //     }, 500)
    //     // highlight packges
    //     setHiglight(pack);
    // }
    return (
        <ul className='flex flex-col md:flex-row gap-1 lg:gap-14 md:items-center space-y-5 md:space-y-0'>
            {/* webhosting with dorpdown */}
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 1)}>
                {/* webhosting */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='md:group-hover:text-primary text-lg font-normal'>Web Hosting</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-0 md:pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 1 ? "block" : "hidden"}`}>
                    <ul className='flex flex-col sm:flex-row shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/* Shared Hosting */}

                            <ul className='flex flex-col whitespace-nowrap drop-mega px-5 py-2 space-y-3'>
                                <li className='font-normal'><Link to="/shared-hosting" onClick={handleHideDrpdown} className='whitespace-nowrap hover:text-primary'>Shared Hosting</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/managed-vps" className='hover:text-primary'>Managed VPS</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/unmanaged-vps" className='hover:text-primary'>Unmanaged VPS</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/email-hosting" className='hover:text-primary'>E-mail Hosting</Link></li>
                                {/* <li className='font-normal'><Link to="" className='hover:text-primary'>Business</Link></li> */}
                            </ul>
                        </li>
                        {/* Reseller hosting */}
                        {/* <li className='space-y-5'>
                            <Link to="/reseller-hosting" onClick={(e) => e.stopPropagation()} className='hover:text-primary'><h4 className='text-base text-left px-10 whitespace-nowrap'>Reseller Hosting</h4></Link>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega sm:border-r px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>RSP -1</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>RSP -2</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>RSP -3</Link></li>
                            </ul>
                        </li>
                       */}
                    </ul>
                </div>
            </li>
            {/* dedicated server with dorpdown */}
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 2)}>
                {/* Dedicated */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal mr-2' to="/dedicated-server" onClick={handleHideDrpdown}>Dedicated Servers</Link>
                    <span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-0 md:pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 2 ? "block" : "hidden"}`}>
                    <ul className='flex shadow-sm flex-wrap md:flex-nowrap shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5 sm:w-1/2 md:w-auto w-full'>
                            {/* By Region */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>By Region</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega sm:border-r px-10'>
                                <li className='font-normal'><Link to={`/north-america`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>North America</Link></li>
                                <li className='font-normal'><Link to={`/europe`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Europe</Link></li>
                                <li className='font-normal'><Link to={`/south-america`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>South America</Link></li>
                                <li className='font-normal'><Link to={`/asia`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Asia</Link></li>
                                <li className='font-normal'><Link to={`/africa`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Africa</Link></li>
                            </ul>
                        </li>
                        {/* by option hosting */}
                        <li className='space-y-5 sm:w-1/2 md:w-auto w-full'>
                            {/*   By Options */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>By Options</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega md:border-r px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>1 Gbps Bandwidth</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Unmetered Bandwidth</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>10Gbps Bandwidth</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Dedicated GPU</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>IPv6</Link></li>
                            </ul>
                        </li>
                        <li className='space-y-5 mb-3 sm:w-full md:w-auto w-full'>
                            {/*    Popular Locations */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap sm:mt-10 md:mt-0'>Popular Locations</h4>
                            <ul className='flex gap-5 sm:flex-nowrap flex-wrap whitespace-nowrap drop-mega'>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10 flex-1 lg:flex-auto'>
                                    <li className='font-normal'><Link to={`/dedicated-servers/paris-france`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Paris</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>France</Link></li>
                                    <li className='font-normal'><Link to={`/netherland`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Netherlands</Link></li>
                                    <li className='font-normal'><Link to={`/dedicated-servers/montreal-canada`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Montreal</Link></li>
                                    <li className='font-normal'><Link to={`/canada`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Canada</Link></li>
                                </ul>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10 flex-1 lg:flex-auto'>
                                    <li className='font-normal'><Link to={`/dedicated-servers/los%20angeles-united%20states`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Los Angeles</Link></li>
                                    <li className='font-normal'><Link to={`/united-state`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>United-States</Link></li>
                                    <li className='font-normal'><Link to={`/dedicated-servers/london-united%20kingdom`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>London</Link></li>
                                    <li className='font-normal'><Link to={`/united-kingdom`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>United Kingdom</Link></li>
                                    <li className='font-normal'><Link to={`/germany`} className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Germany</Link></li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            {/* Domain */}
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 3)}>
                {/* Domain */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal'>Domain</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-0 md:pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 3 ? "block" : "hidden"}`}>
                    <ul className='flex flex-wrap sm:flex-nowrap shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/* Shared Hosting */}
                            {/* <h4 className='text-base text-left px-5 py-2 whitespace-nowrap'>Registration</h4> */}
                            <ul className='flex flex-col space-y-3 whitespace-nowrap drop-mega px-5'>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/domain-registration" className='hover:text-primary capitalize' onClick={handleHideDrpdown}>domain registration</Link></li>
                                {/* <li onClick={handleHideDrpdown} className='font-normal'><Link className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Domain Pricing</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Domain Transfer</Link></li> */}
                                <li onClick={handleHideDrpdown} className='font-normal'><a href="https://my.hostflu.com/cart.php?a=add&domain=register" className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Domain List</a></li>
                            </ul>
                        </li>
                        {/* domain service hosting */}
                        {/* <li className='space-y-5'>
                            {/*   domain Hosting 
                            <h4 className='text-base text-left px-10 whitespace-nowrap mt-10 sm:mt-0'>Domain Service</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain Transfer</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain Reselle</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain priceing</Link></li>
                            </ul>
                        </li> */}

                    </ul>
                </div>
            </li>
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 4)}>
                {/* Other Services */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal'>Other Services</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-0 md:pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 4 ? "block" : "hidden"}`}>
                    <ul className='flex flex-wrap sm:flex-nowrap shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/*   Exclusive Services */}
                            {/* <h4 className='text-base text-left px-10 whitespace-nowrap'>Exclusive Services</h4> */}
                            <ul className='flex flex-col space-y-3 py-2 whitespace-nowrap drop-mega px-5'>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/ssl-certificate" className='hover:text-primary capitalize' onClick={handleHideDrpdown}>SSL Certificate</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/remote-assistant" className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Remote assistant</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/wordpress-customization" className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Wordpress Customization</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link to="/wordpress-migration" className='hover:text-primary capitalize' onClick={handleHideDrpdown}>Wordpress migration</Link></li>
                            </ul>
                        </li>
                        {/* Reseller hosting */}
                        {/* <li className='space-y-5'>
                            {/*   Wordpress 
                            <h4 className='text-base text-left px-10 whitespace-nowrap mt-10 sm:mt-0'>VPS & Wordpress</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>

                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Managed VPS</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Unmanaged VPS</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>wordpress customization</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>wordpress migration</Link></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </li>
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 5)}>
                {/* about us */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link to="/about-us" className='group-hover:text-primary text-lg font-normal' onClick={handleHideDrpdown}>About us</Link>
                    {/* <span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span> */}
                </div>
                {/* about us */}
                {/* <div className={`drop-down static md:absolute md:group-hover:block pt-0 md:pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 5 ? "block" : "hidden"}`}>
                    <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            <ul className='flex flex-col space-y-3 whitespace-nowrap drop-mega px-5 py-2'>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link className='hover:text-primary capitalize'>Our Company</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link className='hover:text-primary capitalize'>About Our Services</Link></li>
                                <li onClick={handleHideDrpdown} className='font-normal'><Link className='hover:text-primary capitalize'>Payment Method</Link></li>
                                <li onClick={handleHideDrpdown} className=''><a href="mailto:hostflu@gmail.com" className='flex sm:hidden items-center gap-2 md:gap-4'><FaEnvelope />Event Gallery</a></li>
                            </ul>
                        </li>

                    </ul>
                </div> */}
            </li>
        </ul>
    )
}
