import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import bannerImgAnimation from "../../../asstes/unmanageserver.json"
import CommonDisplayCountryServer from '../CommonDisplayCountryServer'
function NorthAmerica() {

    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const mexico = (data.countries?.find((country) => country.countryName === "mexico"))
                const canada = (data.countries?.find((country) => country.countryName === "canada"))
                const usa = (data.countries?.find((country) => country.countryName === "united states"))
                const panama = (data.countries?.find((country) => country.countryName === "panama"))
                // ( && country.countryName === "united states" && country.countryName === "canada"))
                setServerLocation([mexico, canada, usa, panama])
                data && setLoading(false)
            })
    }, [])
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
                    </div>
                </div>
            </section>
            <CommonDisplayCountryServer loading={loading} serverLocation={serverLocation}></CommonDisplayCountryServer>
        </main>
    )
}

export default NorthAmerica