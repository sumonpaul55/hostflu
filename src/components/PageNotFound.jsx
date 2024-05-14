import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className='h-[100vh] w-full flex justify-center items-center flex-col'>
            <h1 className="text-5xl">Page not found</h1>3
            <Link className='px-6 py-3 bg-indigo-400 text-white' to="/">Go Home</Link>
        </div>
    )
}

export default PageNotFound