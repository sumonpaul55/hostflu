import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import bannerImgAnimation from "../../asstes/aboutAnimation.json"
import CommonDisplayCountryServer from './CommonDisplayCountryServer'
function UnitedKingdom() {

    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const uk = (data.countries?.find((country) => country.countryName === "united kingdom"))
                // ( && country.countryName === "united states" && country.countryName === "canada"))
                setServerLocation([uk])
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
                            <Player autoplay className="h-96"
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

export default UnitedKingdom