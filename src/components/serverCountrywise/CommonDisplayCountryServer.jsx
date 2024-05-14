import React from 'react'
import Loading from '../shared/loading/Loading'
import ServerLocation from '../dedicatedServer/ServerLocation'

function CommonDisplayCountryServer({ loading, serverLocation }) {
    return (
        <section>
            <div className="container mx-auto">
                <p className='py-8 text-slte-100 md:text-lg font-sans'>A dedicated hosting service, dedicated server, or unmanaged hosting service is a type of Internet hosting in which you lease an entire server not shared with anyone. This is more flexible than shared hosting, as you will have full control over the server(s), including choice of operating system, hardware, etc. Server administration is handled by yourself in terms of software, but we provide 24/7 support for hardware related tasks.</p>
                <div className='pb-20'>
                    <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center border-b-dashed'>Available Location</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-5 xl:gap-6 py-10 md:py-20'>

                        {loading ? <Loading /> :
                            !loading && serverLocation?.map((data, idx) => (
                                <ServerLocation key={idx} serverLocation={data}></ServerLocation>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommonDisplayCountryServer