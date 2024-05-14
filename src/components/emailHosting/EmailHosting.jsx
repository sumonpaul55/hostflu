import React from 'react';
import emailHostingAnimation from "../../asstes/emailAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';

const EmailHosting = () => {
    return (
        <main>
            <PageBanner animationfile={emailHostingAnimation} animationPadding="p-14" pageTitle={["Secure, Reliable Email", <span className='text-primary'> H</span>, "osting for Business"]}></PageBanner>
        </main>
    );
};

export default EmailHosting;

