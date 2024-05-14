import React, { useState } from 'react'
import data from "../../../data.json"
import ".././home.css"
import AccordionItem from './AccordionItem'

function Faq() {
    const [open, setOpen] = useState(1)
    const faqData = data.faq.slice(0, 5);
    const second5 = data.faq.slice(5, 10);
    const toggle = (id) => {
        if (open === id) {
            return setOpen(null)
        }
        setOpen(id)
    }
    return (

        <section className='p-1 py-20'>
            <div className="container mx-auto px-2">
                <h1 className="text-center faq-top text-4xl mb-16 font-semibold text-primary">Frequently asked questions</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        {
                            faqData.map((faq) => (
                                <AccordionItem open={faq.id === open} title={faq.question} desc={faq.answer} key={faq.id} toggle={() => toggle(faq.id)} />
                            ))
                        }
                    </div>
                    {/* second faq */}
                    <div>
                        {
                            second5.map((faq) => (
                                <AccordionItem open={faq.id === open} title={faq.question} desc={faq.answer} key={faq.id} toggle={() => toggle(faq.id)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Faq