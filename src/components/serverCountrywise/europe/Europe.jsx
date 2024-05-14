import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import bannerImgAnimation from "../../../asstes/aboutAnimation.json"
import CommonDisplayCountryServer from '../CommonDisplayCountryServer'
function Europe() {

    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const italy = (data.countries?.find((country) => country.countryName === "italy"))
                const austria = (data.countries?.find((country) => country.countryName === "austria"))
                const belgium = (data.countries?.find((country) => country.countryName === "belgium"))
                const bulgaria = (data.countries?.find((country) => country.countryName === "bulgaria"))
                const croatia = (data.countries?.find((country) => country.countryName === "croatia"))
                const cyprus = (data.countries?.find((country) => country.countryName === "cyprus"))
                const czechrepublic = (data.countries?.find((country) => country.countryName === "czech republic"))
                const denmark = (data.countries?.find((country) => country.countryName === "denmark"))
                const uk = (data.countries?.find((country) => country.countryName === "united kingdom"))
                const france = (data.countries?.find((country) => country.countryName === "france"))
                const sweden = (data.countries?.find((country) => country.countryName === "sweden"))
                const netherlands = (data.countries?.find((country) => country.countryName === "netherlands"))
                const greece = (data.countries?.find((country) => country.countryName === "greece"))
                const poland = (data.countries?.find((country) => country.countryName === "poland"))
                const ukraine = (data.countries?.find((country) => country.countryName === "ukraine"))
                const norway = (data.countries?.find((country) => country.countryName === "norway"))
                const ireland = (data.countries?.find((country) => country.countryName === "ireland"))
                const iceland = (data.countries?.find((country) => country.countryName === "iceland"))
                const albania = (data.countries?.find((country) => country.countryName === "albania"))
                const finland = (data.countries?.find((country) => country.countryName === "finland"))
                const hungary = (data.countries?.find((country) => country.countryName === "hungary"))
                const serbia = (data.countries?.find((country) => country.countryName === "serbia"))
                const slovakia = (data.countries?.find((country) => country.countryName === "slovakia"))
                const lithuania = (data.countries?.find((country) => country.countryName === "lithuania"))
                const BH = (data.countries?.find((country) => country.countryName === "B&H"))
                const latvia = (data.countries?.find((country) => country.countryName === "latvia"))
                const moldova = (data.countries?.find((country) => country.countryName === "moldova"))
                const spain = (data.countries?.find((country) => country.countryName === "spain"))
                const portugal = (data.countries?.find((country) => country.countryName === "portugal"))
                setServerLocation([italy, austria, belgium, bulgaria, croatia, cyprus, czechrepublic, denmark, uk, france, sweden, netherlands, greece, poland, ukraine, norway, ireland, iceland, finland, albania, hungary, serbia, slovakia, lithuania, BH, latvia, moldova, spain, portugal])
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

export default Europe