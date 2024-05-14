import React, { useEffect, useState } from 'react'
import PageBanner from '../shared/pageBanner/PageBanner'
import aboutAnimation from "../../asstes/aboutAnimation.json"
import webserver from "../../asstes/webserver.jpg"
import Testimonial from './Testimonila'
import Swal from 'sweetalert2'
import "./about.css"
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


function AboutUs() {
    const [payment, setPayment] = useState([])
    const [allteam, setAllTeam] = useState([])
    useEffect(() => {
        fetch("paymentData.json")
            .then(res => res.json())
            .then(data => setPayment(data.payment))
    }, [])
    // fetching team data
    useEffect(() => {
        fetch("paymentData.json")
            .then(res => res.json())
            .then(data => setAllTeam(data.team))
    }, [])
    const handlePayment = (items) => {
        Swal.fire({
            html: `
           <div>
                <div class="qrCode flex justify-between flex-col sm:flex-row w-full p-2">
                    <div><img src='${items.qrCode}'/></div>
                    <div class="flex justify-start flex-col items-start gap-4">
                         <h3 class="font-bold mt-5">Account No: </h3><input value=${items?.account_number} readonly class="border p-1 outline-0 text-xl"/>
                    </div>
                 </div>
                 <div>
                    <h3 class="text-left font-bold text-2xl mt-4">${items?.rule}</h3>
                    <ul class="flex flex-col gap-3 items-start font-semibold mt-5">
                      <li class="text-left">${items?.desc1}</li>
                      <li class="text-left">${items?.desc2}</li>
                      <li class="text-left">${items?.desc3}</li>
                      <li class="text-left">${items?.desc4}</li>
                      <li class="text-left">${items?.desc5}</li>
                      <li class="text-left">${items?.desc6}</li>
                    </ul>
                 </div>
            </div>
        `,
            width: "750px",
            imageUrl: items.bank_logo,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel",
            showCloseButton: true
        });
    }
    // <span onClick="(handleCopy)" class="text-2xl relative right-10">&#10063;</span>
    return (
        <main>
            <section className='bg-slate-200'>
                <div className="container mx-auto">
                    <PageBanner animationfile={aboutAnimation} animationHeight="sm:h-[400px]" animationPadding={"p-2 lg:p-10"} pageTitle={["About ", <span key={1} className='text-primary'>H</span>, "ostFlu ", <br className='hidden md:block'></br>, "Web Services"]}></PageBanner>
                </div>
            </section>
            <section className='py-20 px-2'>
                <div className='container mx-auto'>
                    <div>
                        <img src={webserver} alt="web server" className='md:max-w-[600px] rounded-md float-left mr-6 mb-6' />
                        <p className='text-slate-600 md:text-lg'>Founded in 2018, HostFlu has quickly established itself as a leading provider of web services. A subsidiary of Fluresta, HostFlu is the brainchild of Ashiqur Rahman, a seasoned professional with a decade of experience in the industry.
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Leadership and Vision: </span>
                            Ashiqur Rahman, the founder and CEO, serves as the backbone of HostFlu. His broad experience and profound industry comprehension have been vital in shaping the company's vision and strategy. His leadership has been instrumental in guiding HostFlu towards its goal of providing first-rate web services.
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Services Offered: </span>
                            HostFlu provides an extensive range of services designed to cater to the varied requirements of its clientele. These include:
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Web Hosting: </span>
                            HostFlu provides reliable and secure web hosting services, ensuring that websites are accessible around the clock.
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Managed VPS: </span>
                            HostFlu offers managed VPS services for clients requiring more control and flexibility. Clients can experience the advantages of a private server without the burden of handling its management.
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Unmanaged VPS: </span>
                            For tech-savvy clients who prefer to have complete control over their servers, HostFlu provides unmanaged VPS services. </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Email Hosting: </span>
                            Our email hosting service ensures businesses can communicate effectively with their customers and stakeholders.
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Dedicated Server: </span>
                            We offer dedicated servers to ensure optimal performance for businesses with high-traffic websites.
                        </p>
                        <p className='text-slate-600 md:text-lg'>
                            <span>Domain Registration: </span>We help businesses establish their online presence by providing domain registration services.
                        </p>

                        <div className='mt-8'>
                            <p className='text-slate-600 md:text-lg'>
                                <span>Privacy Protection: </span>Understanding the importance of privacy, we offer privacy protection services to safeguard our clients' personal information.
                            </p>


                            <p className='text-slate-600 md:text-lg'>
                                <span>SSL Certificate: </span>We offer SSL certificates to safeguard sensitive information and facilitate secure transactions. </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>WordPress Customization: </span>Recognizing the popularity of WordPress, we offer WordPress customization services to help businesses create unique and engaging websites. </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>Remote Assistance: </span>
                                We provide remote assistance to ensure that clients can seamlessly navigate their digital journey.
                            </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>WordPress Migration: </span>  For businesses looking to switch to WordPress, HostFlu offers WordPress migration services.
                            </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span> Customer Support: </span> We are proud of our exceptional customer service, available 24/7 to assist clients with questions or issues. This commitment to customer service sets HostFlu apart from its competitors.
                            </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>Security: </span>  Recognizing the significance of security in the contemporary digital landscape, we implement state-of-the-art security protocols to protect client data and ensure the steadfast integrity of our websites.</p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>Scalability: </span>
                                Our services are designed to grow with your business. Whether you're a small business just starting or a large corporation with high traffic volumes, HostFlu has a solution to meet your needs.
                            </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>Affordability: </span>
                                Despite offering premium services, we strive to keep our prices competitive. This renders it an appealing option for businesses of varying sizes.
                            </p>
                            <p className='text-slate-600 md:text-lg'>
                                <span>Innovation: </span> We are always looking for ways to improve our services. Staying abreast of the most recent trends and technologies in the web services industry, the company ensures that its clients receive optimal solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20 px-1'>
                <div className="container mx-auto">
                    <h1 className="text-center text-slate-700 text-2xl md:text-[40px] mb-20 font-semibold">Our Team</h1>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10 overflow-hidden px-4 py-10'>
                        {
                            allteam?.map((items, idx) => (
                                <div key={idx} className='py-1 bg-slate-300 px-1 rounded-md relative group overflow-hidden'>
                                    <img src={items?.image} alt={items?.name} className='rounded-md' />
                                    <div className='absolute left-0 -bottom-full group-hover:bottom-0 duration-300 px-2 text-white h-full w-full bg-black flex flex-col justify-end bg-opacity-50 rounded-md'>
                                        {/* <p className='text-white font-bold px-3 text-xl text-center'>{items?.proverbs}</p> */}
                                        <ul className='px-2 flex justify-evenly gap-2 file flex-wrap mb-7'>
                                            <li className='hover:rotate-[360deg] duration-300 p-3'><a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={items?.fbUrl}>
                                                <FaFacebook size={25} /></a>
                                            </li>
                                            <li className='hover:rotate-[360deg] duration-300 p-3'>
                                                <a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={items?.linkedinUrl}>
                                                    <FaLinkedin size={25} />
                                                </a>
                                            </li>
                                            <li className='hover:rotate-[360deg] duration-300 p-3'>
                                                <a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={`https://wa.me/${items?.whatsApp}`}><FaWhatsapp size={25} /></a>
                                            </li>
                                            <li className='hover:rotate-[360deg] duration-300 p-3'>
                                                <a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={items?.gitHub}><FaGithub size={25} /></a>
                                            </li>
                                        </ul>
                                        <div className='pb-5 text-center'>
                                            <h3 className="text-2xl font-bold">{items.name}</h3>
                                            <h4 className='text-primary font-semibold'>{items?.designation}</h4>
                                            <h4 className='font-semibold'>{items?.organization}</h4>
                                        </div>
                                    </div>
                                    <div className='absolute bottom-0 left-0 px-4 w-full py-3 group-hover:-bottom-full text-white bg-black bg-opacity-50 duration-700'>
                                        <h3 className="text-2xl font-bold">{items.name}</h3>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>
            <section className='py-20 bg-slate-50 px-1'>
                <div className="container mx-auto">
                    <h1 className="text-center text-slate-700 text-2xl md:text-[40px] mb-10 font-semibold">Payment Gatway</h1>
                    <p className='text-xl text-slate-700 mb-3'>Click to view payment details</p>
                    <div className='payment-option grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>
                        {
                            payment?.map((items, idx) => (
                                <button onClick={() => handlePayment(items)} key={idx} className="gatway bg-white flex border items-center justify-center p-2 sm:p-5 cursor-pointer rounded-lg">
                                    <img src={items?.bank_logo} alt={items?.bank_name} className='w-1/2' />
                                </button>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='py-10 bg-slate-50'>
                <Testimonial></Testimonial>
            </section>
        </main>
    )
}

export default AboutUs