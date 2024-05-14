import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../../asstes/sliderimg-1.png"

export default function Testimonial() {

    const settings = {
        infinite: true,
        arrow: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className="py-20">
            <div className="container mx-auto text-center px-12 sm:px-8">
                <div className="section-top">
                    <h1 className="text-center text-primary text-2xl md:text-[40px] mb-10 font-semibold">What Customers Say About Us</h1>
                    <p>What our customers have to say about our service, check below!</p>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div">
                            <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                <img src={sliderImg} alt="" className="mx-auto w-16 h-16 z-10 shadow-2xl rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl mt-10 font-medium">Mr Jorce</h3>
                            <span className="block mt-2 text-gray-500">Retail Company</span>
                            <p className="text-sm md:text-xl mt-4 text-gray-600">"Exceptional service! Registering my domain was a breeze with your user-friendly interface. Quick and hassle-free process. Highly recommended!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div">
                            <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                <img src={sliderImg} alt="" className="mx-auto w-16 h-16 z-10 shadow-2xl rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl mt-10 font-medium">Md Zabbour</h3>
                            <span className="block mt-2 text-gray-500">TechSavvy Solutions</span>
                            <p className="text-sm md:text-xl mt-4 text-gray-600">"Securing my website was a top priority, and your SSL certificates did the job perfectly. The installation was straightforward, and the added security gives me peace of mind. Thank you!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div">
                            <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                <img src={sliderImg} alt="" className="mx-auto w-16 h-16 z-10 shadow-2xl rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl mt-10 font-medium">Mr Smith</h3>
                            <span className="block mt-2 text-gray-500">InfinitiCode Systems</span>
                            <p className="text-sm md:text-xl mt-4 text-gray-600">"Thrilled with the way you customized my WordPress site! The attention to detail and creative touch truly set it apart. My website now reflects my brand perfectly. Great job!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div">
                            <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                <img src={sliderImg} alt="" className="mx-auto w-16 h-16 z-10 shadow-2xl rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl mt-10 font-medium">Md Rupak Islam</h3>
                            <span className="block mt-2 text-gray-500">SwiftBit Solutions</span>
                            <p className="text-sm md:text-xl mt-4 text-gray-600">"Switching to a managed VPS was the best decision. The performance boost is noticeable, and the support team is incredibly responsive. My website has never been faster or more reliable. Thank you!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div">
                            <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                <img src={sliderImg} alt="" className="mx-auto w-16 h-16 z-10 shadow-2xl rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl mt-10 font-medium">Jimmy Donaaldson</h3>
                            <span className="block mt-2 text-gray-500">MetaMatrix Innovations</span>
                            <p className="text-sm md:text-xl mt-4 text-gray-600">"For those who prefer more control, your unmanaged VPS is a dream. The flexibility to customize everything to my liking is fantastic. Reliable service, and the pricing is unbeatable. Very satisfied customer!"</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section >
    );
}