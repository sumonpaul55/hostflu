import React from 'react'
import { Collapse } from 'react-collapse'
import { RiArrowUpSLine } from "react-icons/ri"

function AccordionItem({ open, toggle, title, desc }) {
    return (
        <div className='py-3'>
            <div onClick={toggle} className='cursor-pointer pb-3 border-b mb-4 border-gray-400 flex items-center w-full justify-between'>
                <h2 className='text-base md:text-xl font-medium cursor-pointer'>{title}</h2>
                <span className={`text-2xl duration-500 ${open ? "rotate-0" : "rotate-180"}`}><RiArrowUpSLine /></span>
            </div>
            <Collapse isOpened={open}>{desc}</Collapse>
        </div>
    )
}

export default AccordionItem