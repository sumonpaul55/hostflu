/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import "./dedicated.css"
import ServerLocation from './ServerLocation';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import bannerImgAnimation from "../../asstes/dedicated-server-banner.json"
import Loading from '../shared/loading/Loading';
const DedicatedServer = () => {
    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    const [searchData, setSearchData] = useState([])
    // display search value if data not match
    const [searchValue, setSearchValue] = useState("")
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                setServerLocation(data.countries)
                setSearchData(data.countries)
                data && setLoading(false)
            })
        // setSearchData(serverLocation)
    }, [])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        e.preventDefault();
        setSearchData(serverLocation)
        const searchCountry = serverLocation.filter((items) => {
            return items.countryName.toLowerCase().startsWith(e.target.value.toLowerCase())
        })
        setSearchData(searchCountry)
        if (e.target.value === "") {
            setSearchData(serverLocation)
        }
    }
    // console.log(searchData)

    return (
        <main>
            <section className='bg-slate-100 '>
                <div className="dedicated-banner container mx-auto">
                    <div className='pb-10 flex items-center flex-row-reverse justify-evenly'>
                        <div className='ml-auto md:pr-32'>
                            <Player autoplay className={``}
                                loop
                                src={bannerImgAnimation}>
                                <Controls buttons={['play', 'repeat', 'debug']} />
                            </Player>
                        </div>
                        <div className='self-end md:mb-16'>
                            <h2 className='font-bold text-xl md:text-2xl lg:text-4xl mb-6 text-slate-700'>Dedicated Servers</h2>
                            <form className='text-center'>
                                <input onChange={handleSearch} type="text" placeholder='Search Server Location' className='text-center border-black placeholder:text-slate-600 border border-opacity-20 w-10/12 mx-auto py-2 rounded-lg px-3 outline-none text-lg' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <p className='py-8 text-slte-100 md:text-lg font-sans'>A dedicated hosting service, dedicated server, or unmanaged hosting service is a type of Internet hosting in which you lease an entire server not shared with anyone. This is more flexible than shared hosting, as you will have full control over the server(s), including choice of operating system, hardware, etc. Server administration is handled by yourself in terms of software, but we provide 24/7 support for hardware related tasks.</p>
                    <div className='pb-20'>
                        <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center border-b-dashed'>Available Location</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-5 xl:gap-6 py-10 md:py-20'>

                            {loading ? <Loading /> :
                                searchData.length < 1 && !loading ? <h1 className='text-xl md:text-2xl xl:text-3xl font-bold'>No Country With <span className='text-primary'>{searchValue}</span></h1> :
                                    !loading && searchData.map((data, idx) => (
                                        <ServerLocation key={idx} serverLocation={data}></ServerLocation>
                                    ))
                            }
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default DedicatedServer;