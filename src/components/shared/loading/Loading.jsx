import React from 'react'

function Loading() {
    return (
        <div className='max-w-[300px] mx-auto mt-20 text-2xl md:text-4xl font-bold flex items-center'>Loading... <span className='block w-5 h-5 bg-slate-700 animate-spin'></span></div>
    )
}

export default Loading