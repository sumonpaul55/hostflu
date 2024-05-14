import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationDatatabel = () => {
    const [locationData, setLocationData] = useState([])
    const { location } = useParams();
    const city = location.split("-")[0];
    const country = location.split("-")[1];

    useEffect(() => {
        fetch("../locationdata.json")
            .then(res => res.json())
            .then(data => {
                setLocationData(data.countries)
            })
    }, [])
    const specificCountry = locationData?.find(countries => countries.countryName === country)
    const allCities = specificCountry?.city?.filter(cities => cities.name === city)
    const cityBgImg = allCities?.map(items => items.cityBg)[0]
    // console.log(cityImg)
    return (
        <>
            <section className={`min-h-[40vh] relative`}>
                <img src={cityBgImg} alt="" className='w-full h-[42vh] blur-[1px] z-0' />
                {/* <div className='absolute h-full w-full top-0 left-0opacity-60 blur-2xl'></div> */}
                <div className='w-full h-full bg-black absolute text-center text-white top-0 bg-opacity-30 flex items-center justify-center'>
                    <h1 className='font-bold text-white text-2xl md:text-4xl lg:text-5xl'>Dedicated Servers in <span className='capitalize'>{city}</span>, <span className='capitalize'>{country}</span></h1>
                </div>
            </section >
            <section className=''>
                <div className='py-10 container mx-auto'>
                    <div>
                        <div className=' bg-orange-500 hidden xl:block rounded-md px-3'>
                            <div className='flex items-center'>
                                <div className='uppercase whitespace-nowrap text-white font-semibold xl:pl-3 xl:max-w-[150px]'>Server Id</div>
                                <ul className='xl:grid grid-cols-3 md:grid-cols-6 gap-6 py-5 text-white font-semibold w-full'>
                                    <li className='uppercase ml-20'>CPU</li>
                                    <li className='uppercase text-center'>RAM</li>
                                    <li className='uppercase'>STORAGE</li>
                                    <li className='uppercase'>NETWORK</li>
                                    <li className='uppercase'>PRICE</li>
                                    <li className='uppercase'>Availability</li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 xl:grid-cols-1'>
                            {
                                allCities?.map((cities) => (
                                    cities?.details?.map((details, idx) => (
                                        <div key={idx} className='shadow-lg border flex xl:px-6 mt-3 rounded-md flex-col xl:flex-row p-2 xl:p-0 flex-start xl:items-center items-start'>
                                            <div className='whitespace-nowrap ml-5 xl:ml-0 py-3 xl:max-w-[150px]'><span className='inline xl:hidden'>Server Id :</span> {details.id}</div>
                                            <div className='grid grid-cols-1 xl:grid-cols-6 gap-3 items-center xl:py-2 xl:p-0 font-semibold w-full'>
                                                <div className='flex items-start flex-row-reverse xl:flex-row justify-end xl:justify-start text-start gap-3 ml-5 xl:ml-0 xl:pl-10 xl:items-center'>
                                                    <img src={details.brand} alt="" className='w-14' />
                                                    <div className='flex flex-col'>
                                                        <span className='font-bold xl:font-thin text-lg xl:text-base'>{details.cpu}</span>
                                                        <span className='font-thin text-xs'>{details?.ghz}</span>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2 xl:flex-col xl:text-center font-thin ml-5 xl:ml-0 xl:pl-10'>
                                                    <span className='font-bold xl:font-thin text-lg xl:text-base'>{details.ram}</span>
                                                    <span>{details.ddr}</span>
                                                </div>
                                                <div className='flex xl:flex-col font-thin ml-5 xl:ml-0 xl:pl-6'>
                                                    <span className='font-bold xl:font-thin text-lg xl:text-base'>{details.storage}</span>
                                                    <span>{details?.alternativeStorage}</span>
                                                </div>
                                                <div className='flex gap-2 xl:flex-col font-thin ml-5 xl:ml-0 xl:pl-6'>
                                                    <span className='font-bold xl:font-thin text-lg xl:text-base'>{details?.networkSpeed}</span>
                                                    <span>{details?.maximumSpeed}</span>
                                                    <span className='italic'>{details?.fairUse}</span>
                                                </div>
                                                <div className='ml-5 xl:ml-0 xl:pl-6'>
                                                    <del className='font-thin'>{details?.oldPrice}</del>
                                                    <h2 className='flex font-extrabold text-lg xl:text-base'>${details?.newPrice}</h2>
                                                </div>
                                                <div className='md:ml-7'>
                                                    <a target='_blank' rel="noreferrer" href="https://m.me/198137493375467">
                                                        <button className='bg-[#6c757d] hover:bg-slate-600 duration-300 py-2 px-4 rounded-md text-white w-full xl:w-auto'>Check Now</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LocationDatatabel;