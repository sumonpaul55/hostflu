import { Controls, Player } from "@lottiefiles/react-lottie-player"
import { useEffect, useState } from "react"
import bannerImgAnimation from "../../asstes/aboutAnimation.json"
import CommonDisplayCountryServer from "./CommonDisplayCountryServer"
function Africa() {
    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const southafrica = (data.countries?.find((country) => country.countryName === "south africa"))
                const kenya = (data.countries?.find((country) => country.countryName === "kenya"))
                const morocco = (data.countries?.find((country) => country.countryName === "morocco"))
                const nigeria = (data.countries?.find((country) => country.countryName === "nigeria"))
                const libya = (data.countries?.find((country) => country.countryName === "libya"))



                setServerLocation([southafrica, kenya, morocco, nigeria, libya])
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

export default Africa