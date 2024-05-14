import React from 'react';
import constructionAnimation from "../../../asstes/under-construction.json"
import { Controls, Player } from '@lottiefiles/react-lottie-player';
const Construction = () => {
    return (
        <div className='my-7'>
            <div className={`ml-auto`}>
                <Player className={`md:h-[600px]`}
                    autoplay
                    loop
                    src={constructionAnimation}
                >
                    <Controls buttons={['play', 'repeat', 'debug']} />
                </Player>
            </div>
        </div>
    );
};

export default Construction;