import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import bannerImgAnimation from "../../asstes/dedicated-server-banner.json"
import CommonDisplayCountryServer from './CommonDisplayCountryServer'
function SouthAmerica() {

    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const costarica = (data.countries?.find((country) => country.countryName === "costa rica"))
                const argentina = (data.countries?.find((country) => country.countryName === "argentina"))
                const chile = (data.countries?.find((country) => country.countryName === "chile"))
                const ecuador = (data.countries?.find((country) => country.countryName === "ecuador"))
                const brazil = (data.countries?.find((country) => country.countryName === "brazil"))
                const guatemala = (data.countries?.find((country) => country.countryName === "guatemala"))
                const colombia = (data.countries?.find((country) => country.countryName === "colombia"))
                // ( && country.countryName === "united states" && country.countryName === "canada"))
                setServerLocation([costarica, argentina, chile, ecuador, brazil, guatemala, colombia])
                data && setLoading(false)
            })
        // setSearchData(serverLocation)
    }, [])
    // console.log(serverLocation)
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

export default SouthAmerica