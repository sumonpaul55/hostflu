import React from 'react'
import logo from "../../asstes/footer-logo.png"
import "./footer.css"
import { MdNetworkWifi } from "react-icons/md"
import { FaFacebookF, } from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import bkash from "../../asstes/bkash.png"
import nagad from "../../asstes/nagad.png"
import rocket from "../../asstes/rocket.png"
import wise from "../../asstes/wise.png"
import brac from "../../asstes/brac.png"
import dutch from "../../asstes/dutch.png"
import city from "../../asstes/city.png"
import estern from "../../asstes/estern.png";
// import supportImg from "../../asstes/our-support.jpg";
import { RxAvatar } from "react-icons/rx"
import { Controls, Player } from '@lottiefiles/react-lottie-player'
// import mouthSpech from "../../asstes/mouthspech.png"
import supportAnimation from "../../asstes/support.json"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container mx-auto -mt-20">
                <div className='bg-slate-50 z-10 relative bottom-[-120px] p-2 sm:p-6 rounded-2xl border border-[#cccccc61]'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10 items-center">
                        <div className='flex items-center justify-center'>
                            {/* <img src={supportImg} alt="Our Support" className='w-full mx-auto' /> */}
                            <Player
                                autoplay
                                loop
                                src={supportAnimation}
                            >
                                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>
                        <div className='md:col-span-2'>
                            <h2 className='text-2xl md:text-4xl font-medium mb-8 capitalize'>We are here to help you </h2>
                            <p className='text-justify text-base md:text-xl'>Thank you for your interest in our hosting company support. We are committed to providing our customers with the highest quality service and support. Founded in 2018, HostFlu has quickly established itself as a leading provider of web services. A subsidiary of Fluresta, HostFlu is the brainchild of Ashiqur Rahman, a seasoned professional with a decade of experience in the industry. Leadership and Vision Ashiqur Rahman, the founder and CEO, serves as the backbone of HostFlu. His broad experience and profound industry comprehension have been vital in shaping the company's vision and strategy. His leadership has been instrumental in guiding HostFlu towards its goal of providing first-rate web services. Services Offered HostFlu delivers an extensive range of services designed to cater to the varied requirements of its clientele. These include Web Hosting: HostFlu provides reliable and secure web hosting services, ensuring that websites are accessible around the clock. Managed VPS: HostFlu offers managed VPS services for clients requiring more control and flexibility. Highly skilled and dedicated web services professional with a strong background in hosting and managing virtual private servers (VPS). Extensive experience in providing reliable and secure web hosting services, ensuring maximum uptime and customer satisfaction. Adept at troubleshooting, resolving technical issues, and managing and optimizing server performance. Demonstrated capability to cooperate with clients and yield outstanding outcomes. Dedicated to keeping abreast of the most recent industry trends and technologies to offer state-of-the-art solutions.</p>
                            <div className="butttons flex flex-col sm:flex-row gap-3 md:gap-5 lg:gap-12 mt-10">
                                <button className='flex items-center gap-1 p-2 border rounded-md hover:bg-slate-400 duration-300 group bg-slate-200'>
                                    <span className='text-gray-600 p-1 rounded-full bg-slate-200 group-hover:bg-slate-400 duration-300 group-hover:text-white text-2xl'><RxAvatar /></span><span className='group-hover:text-white duration-300'>Dashboard Login</span>
                                </button>
                                <button className='flex items-center gap-1 p-2 border rounded-md hover:bg-slate-400 duration-300 group bg-slate-200'>
                                    <span className='text-gray-600 bg-slate-200 p-1 rounded-full group-hover:bg-slate-400 duration-300 group-hover:text-white text-2xl'><RxAvatar /></span><span className='group-hover:text-white duration-300'>Dashboard Login</span>
                                </button>
                                <button className='flex items-center gap-1 p-2 border rounded-md hover:bg-slate-400 duration-300 group bg-slate-200'>
                                    <span className='text-gray-600 p-1 rounded-full group-hover:bg-slate-400 bg-slate-200 duration-300 group-hover:text-white text-2xl'><RxAvatar /></span><span className='group-hover:text-white duration-300'>Dashboard Login</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tab and mobile device */}
            {/* <div className='font-bold text-2xl flex justify-evenly md:hidden bg-black text-white py-10 items-center'>
                <div className='flex gap-3'>
                    <p>We are Here to Help you :</p> <strong className='text-primary'>01719-375526</strong>
                </div>
                <img src={mouthSpech} className='w-16' alt="Mouth speech" />
            </div> */}

            {/* footer top our support section */}
            <footer className='pt-52'>
                <div className="container mx-auto px-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 gap-20 lg:gap-20">
                        {/* col maind div */}
                        <div>
                            <div className="col-title mb-8">
                                <img src={logo} alt="Hostflu" className='pb-5' />
                                <hr className='w-[55%] -m-1' />
                            </div>
                            <p className='text-gray-100 leading-7 font-extralight text-justify'>Namecheap exists to help EVERYONE get, make, and achieve more online with less cost, hassle, and head
                                aches. We offer everything you need to get online and thrive, from domains to. e online with less cost, hassle, ane online with less cost, hassle, an   </p>
                        </div>
                        {/* col maind div */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Web Hosting</h3>
                            </div>
                            <ul className='list-disc list-inside space-y-4 text-white'>
                                <li>Web Hosting</li>
                                <li>Wordpress Hosting</li>
                                <li>VPS Hosting</li>
                                <li>Managed VPS Hosting</li>
                                <li>Dedicated Hosting</li>
                            </ul>
                        </div>
                        {/* col main div end */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Cloud Server</h3>
                            </div>
                            <ul className='list-disc list-inside space-y-4 text-white'>
                                <li>Web Hosting</li>
                                <li>Wordpress Hosting</li>
                                <li>VPS Hosting</li>
                                <li>Managed VPS Hosting</li>
                                <li>Dedicated Hosting</li>
                            </ul>
                        </div>
                        {/* col main div end */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Domain</h3>
                            </div>
                            <ul className='list-disc list-inside space-y-4 text-white'>
                                <li>Web Hosting</li>
                                <li>Wordpress Hosting</li>
                                <li>VPS Hosting</li>
                                <li>Managed VPS Hosting</li>
                                <li>Dedicated Hosting</li>
                            </ul>
                        </div>
                        {/* col main div end */}
                    </div>
                    <div className="footer-bottom py-20">
                        <div className="grid gird-cols-1 md:grid-cols-3  gap-20">
                            <div className="payment-gatway">
                                <div className='s-title text-white flex items-center gap-3 mb-5'>
                                    <span className='text-xl'><MdOutlineVerifiedUser /></span>
                                    <h3 className='font-semibold'>Follow Our Social Media</h3>
                                </div>
                                <div className='payment-option grid grid-cols-2 lg:grid-cols-4 gap-3'>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={bkash} alt="bkash" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={nagad} alt="nagad" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={rocket} alt="rocket" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={wise} alt="wise" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={brac} alt="brac" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={dutch} alt="dutch" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={city} alt="city" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={estern} alt="estern" /></div>
                                </div>
                            </div>
                            <div className="newsletter">
                                <h2 className='text-white text-xl font-semibold'>Subscribe Our Newsletter</h2>
                                <p className='text-white leading-7 w-[70%] my-5'>By subscribing with your mail, you will accept our privacy policy.</p>
                                <form action="" className='flex bg-white p-2 justify-between items-center rounded-lg'>
                                    <input required type="text" className='flex-1 text-gray-400 outline-none p-2' placeholder='Enter Your Email Address' />
                                    <input type="submit" value="SUBSCRIBE" className='px-1 sm:px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:bg-primary md:ml-4 rounded-lg text-white cursor-pointer' />
                                </form>
                            </div>
                            <div className="social space-y-5">
                                <div className='s-title text-white flex items-center gap-3'>
                                    <span className='text-xl rotate-45'><MdNetworkWifi /></span>
                                    <h3>Follow Our Social Media</h3>
                                </div>
                                <ul className='flex items-center gap-5 flex-wrap'>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><FaFacebookF /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><AiFillInstagram /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><TbWorld /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><AiFillYoutube /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* container */}
                <div className="copyright py-2 text-white bg-primary">
                    <div className="container mx-auto px-2">
                        <div className="flex items-center justify-between">
                            <span>Copyright © HostFlu 2023</span>
                            <ul className='flex items-center'>
                                <li className='border-r border-gray-300 px-1 md:px-3 text-sm md:text-base'><Link to="/termsOfService">Terms of Service</Link></li>
                                <li className='px-2 md:px-4 text-sm md:text-base'>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer