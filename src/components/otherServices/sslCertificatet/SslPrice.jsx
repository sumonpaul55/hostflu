import React from 'react'
const SslPrice = () => {
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl capitalize text-primary text-center font-semibold mb-14">Price</h2>
                <div>
                    <table className='w-full'>
                        <thead>
                            <tr className='font-semibold bg-opacity-60 bg-slate-200'>
                                <td className='border p-2 text-center'>SSL Certificate Name</td>
                                <td className='border p-2 text-center'>For 1 Year</td>
                                <td className='border p-2 text-center'>For 2 Years</td>
                                <td className='border p-2 text-center'>For 3 Years</td>
                                <td className='border p-2 text-center'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <td className='border p-2 text-center'>Sectigo Positive SSL, Domain Validation Single domain</td>
                                <td className='border p-2 text-center'>900</td>
                                <td className='border p-2 text-center'>1750</td>
                                <td className='border p-2 text-center'>2600</td>
                                <td className='border p-2 text-center'>
                                    <button className='bg-primary w-full py-2 text-white rounded-md hover:bg-opacity-70 duration-200'>Order Now</button>
                                </td>
                            </tr>
                            <tr className='border'>
                                <td className='border p-2 text-center'>Sectigo PositiveSSL Multi-Domain</td>
                                <td className='border p-2 text-center'>4000</td>
                                <td className='border p-2 text-center'>7500</td>
                                <td className='border p-2 text-center'>11000</td>
                                <td className='border p-2 text-center'>
                                    <button className='bg-primary w-full py-2 text-white rounded-md hover:bg-opacity-70 duration-200'>Order Now</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default SslPrice