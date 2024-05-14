import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import underConstruction from "../../../asstes/under-construction.json"

function WrodpressMigration() {
    return (
        <main>
            <section>
                <div className="container mx-auto">
                    <div className='mt-32'>
                        <h1 className='text-center text-2xl font-bold'>Under Construction</h1>
                        <Player className='sm:h-[400px]' src={underConstruction}>

                        </Player>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WrodpressMigration