import { } from '@lottiefiles/react-lottie-player'
import React from 'react'
import sslAnimation from "../../../asstes/ssl-certificate.json"
import PageBanner from './../../shared/pageBanner/PageBanner';
import ssl from '../../../asstes/ssl-certificate.png'
import SslPrice from './SslPrice';
import CheapSslShop from './CheapSslShop';
function SslCertificate() {
    return (
        <main className="px-1 md:px-0">
            <PageBanner animationfile={sslAnimation} pageTitle={[<span key={1} className="text-primary">SSL</span>, " Certificate"]} animationHeight="h-[400px]"></PageBanner>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-7 items-center">
                        <div>
                            <img src={ssl} alt="ssl certificate" className="w-full rounded-md border p-2 sm:p-5 md:p-8 lg:p-10" />
                        </div>
                        <div>
                            <div>
                                <p className="md:text-xl md:leading-normal">
                                    HostFlu, a company specializing in SSL certificates, celebrates its third anniversary in the field of online security. SSL certificates are essential in creating secure links between web servers and users’ browsers, defending against potential dangers like data manipulation and unauthorized interception. HostFlu has adapted to the evolving landscape of cybersecurity, offering robust and up-to-date security solutions. They have expertise in navigating the Public Key Infrastructure (PKI), which ensures encryption and decryption of information with utmost security. HostFlu offers various types of SSL certificates tailored to meet the unique security needs and business requirements of each client. They also adopt a proactive approach to certificate management, ensuring timely renewal and mitigating potential risks. With three years of experience, HostFlu is dedicated to staying ahead in the cybersecurity landscape and providing a secure digital future for businesses and users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SslPrice></SslPrice>
            <CheapSslShop></CheapSslShop>
        </main>
    )
}

export default SslCertificate