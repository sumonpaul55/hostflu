import React from 'react'
import privacyAnimation from "../../asstes/privacyAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner'
function PrivacyPolicy() {
    return (
        <main>
            <section className='py-10'>
                <div className="container mx-auto">
                    <PageBanner animationfile={privacyAnimation} animationHeight={"h-[200px]"}></PageBanner>
                </div>
            </section>
            <section className='py-10 bg-slate-200 px-1'>
                <div className="container mx-auto">
                    <div>
                        <h2 className='font-bold text-xl'>Privacy Policy</h2>
                        <h2 className='mt-2 text-xl '>Last Updated: 18/11/2023</h2>
                        <div className='space-y-3 mt-8 md:text-xl'>
                            <p><strong>1. Introduction: </strong>
                                Welcome to HostFlu! Our Privacy Policy is here to provide you with information about how we collect, use, and disclose information that we may obtain through our website, products, and services. By utilizing the services provided by HostFlu, you are agreeing to the terms specified in this Privacy Policy.
                            </p>
                            <p>
                                <strong>2. Information We Collect</strong><br />
                                <strong>2.1 Personally Identifiable Information (PII): </strong>
                                HostFlu may collect personally identifiable information, including but not limited to
                            </p>
                            <p>
                                <strong>Contact Information: </strong>
                                Such as your name, email address, phone number, and mailing address.
                            </p>
                            <p>
                                <strong> Billing Information: </strong> Including payment details necessary for transactions.
                            </p>
                            <p><strong>Account Credentials:</strong> Usernames, passwords, and other security-related information.</p>
                            <p>
                                <strong>2.2 Non-Personally Identifiable Information: </strong>
                                HostFlu may also collect non-personally identifiable information, such as:
                            </p>
                            <p>
                                <strong>Usage Data: </strong>Information about how you interact with our website and services.
                            </p>
                            <p><strong> Device Information: </strong>Including your IP address, browser type, and operating system.
                            </p>
                            <p><strong>3. How We Use Your Information: </strong>
                                HostFlu uses the collected information for various purposes, including:
                            </p>
                            <p><strong>Service Provision: </strong> To deliver the products and services you have requested.</p>
                            <p><strong>Customer Support: </strong> To provide assistance and address inquiries.</p>
                            <p><strong>Billing and Transactions: </strong> To process payments and manage financial transactions.</p>
                            <p><strong>Improvement of Services: </strong> To analyze usage patterns and enhance our offerings.</p>
                            <p><strong>Communication: </strong> To send updates, newsletters, and promotional material (with the option to opt out).</p>
                            <p><strong>4. Information Sharing: </strong> HostFlu does not sell, trade, or rent your personal information to third parties. However, we may share your information with:</p>
                            <p><strong>Service Providers: </strong> Third-party vendors who assist us in delivering our services.</p>
                            <p><strong>Legal Compliance: </strong> In response to a legal obligation or to protect our rights.</p>
                            <p><strong>User Consent: </strong> With your explicit consent, we may share your information.</p>
                            <p><strong>5. Data Security: </strong> HostFlu takes appropriate measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include data encryption, regular security assessments, and access controls.</p>
                            <p><strong>6. Cookies and Tracking Technologies: </strong> HostFlu may use cookies and similar tracking technologies to enhance your browsing experience and collect information about your activities on our website. You can manage cookie preferences through your browser settings.</p>
                            <p><strong>7. Third-Party Links: </strong> Our website may contain links to third-party websites. HostFlu is not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of these websites before providing any personal information.</p>
                            <p><strong>8. Children's Privacy: </strong> HostFlu does not knowingly collect information from individuals under the age of 13. If we become aware of such information being collected, we will take appropriate steps to delete it.</p>
                            <p><strong>9. Changes to the Privacy Policy: </strong> HostFlu reserves the right to update this Privacy Policy at any time. Any changes will be communicated through our website or via email.</p>
                            <p><strong>10. Retention of Personal Data: </strong> HostFlu retains your personal information only for as long as necessary for the purposes outlined in this Privacy Policy. We may keep your information longer for legal and regulatory compliance or to resolve disputes.</p>
                            <p><strong>11. Analytics and Performance: </strong> HostFlu uses analytics tools to gather information about the performance and usage of our website and services. This includes aggregated data that helps us understand user behaviour and improve our offerings. These analytics may be conducted using third-party services, and the collected data is used in accordance with this Privacy Policy.</p>
                            <p><strong>12 . Marketing Preferences: </strong> You can control your marketing preferences. We may use your contact information for promotional activities, but you have the right to opt out of these communications. Your preferences can be updated through your account settings or by reaching out to us at ashiqur281@gmail.com.</p>
                            <p><strong>14. Data Subject Rights: </strong> You have certain rights regarding your personal information, including the right to access, correct, or delete your data. If you wish to exercise these rights or have questions about your data, please get in touch with us at ashiqur281@gmail.com.</p>
                            <p><strong>15 . Incident Response and Notification: </strong> In the event of a data breach or security incident, HostFlu has established incident response procedures. We will promptly investigate and take appropriate measures, including notifying affected individuals and authorities if required by law.</p>
                            <p><strong>16. Data Transfer Mechanisms: </strong> If your personal information is transferred to entities outside your jurisdiction, we will ensure that adequate safeguards are in place, such as Standard Contractual Clauses or other legal mechanisms to protect your data.</p>
                            <p><strong>17 . User Contributions: </strong> If you contribute content to HostFlu, such as reviews, comments, or forum posts, please be aware that this information may be publicly visible. Exercise caution when sharing personal information in such contributions.</p>
                            <p><strong>18 . Accessibility: </strong> HostFlu is committed to making our services accessible to all users. If you have accessibility concerns or need assistance, please get in touch with us at ashiqur281@gmail.com. </p>
                            <p><strong>19. Contact Us: </strong> If you have questions or concerns regarding this Privacy Policy, please get in touch with us at ashiqur281@gmail.com.  </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PrivacyPolicy