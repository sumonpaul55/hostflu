import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import bannerImgAnimation from "../../asstes/aboutAnimation.json"
import CommonDisplayCountryServer from './CommonDisplayCountryServer'

function Asia() {
    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const bangladesh = (data.countries?.find((country) => country.countryName === "bangladesh"))
                const india = (data.countries?.find((country) => country.countryName === "india"))
                const china = (data.countries?.find((country) => country.countryName === "china"))
                const pakistan = (data.countries?.find((country) => country.countryName === "pakistan"))
                const philippines = (data.countries?.find((country) => country.countryName === "philippines"))
                const qatar = (data.countries?.find((country) => country.countryName === "qatar"))
                const southkorea = (data.countries?.find((country) => country.countryName === "south korea"))
                const singapore = (data.countries?.find((country) => country.countryName === "singapore"))
                const turkey = (data.countries?.find((country) => country.countryName === "turkey"))
                const thailand = (data.countries?.find((country) => country.countryName === "thailand"))
                const arobemirates = (data.countries?.find((country) => country.countryName === "united arab emirates"))
                const japan = (data.countries?.find((country) => country.countryName === "japan"))
                const malaysia = (data.countries?.find((country) => country.countryName === "malaysia"))
                const vietnam = (data.countries?.find((country) => country.countryName === "vietnam"))
                const israel = (data.countries?.find((country) => country.countryName === "israel"))
                setServerLocation([bangladesh, india, china, pakistan, philippines, qatar, southkorea, singapore, turkey, thailand, arobemirates, japan, malaysia, vietnam, israel])
                data && setLoading(false)
            })
        // setSearchData(serverLocation)
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

export default Asia