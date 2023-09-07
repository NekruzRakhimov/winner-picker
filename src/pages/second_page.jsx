import React, {useEffect, useState, useRef} from 'react';
import Ball from "../components/Ball";
import myWebm from "../files/balls.webm"
import {Howl, Howler} from 'howler';
import sound1 from "../files/rolling1.wav"
import reveal1 from "../files/reveal1.mp3"
import reveal2 from "../files/reveal2.mp3"


let sound = new Howl({
    src: [sound1],
    rate: 0.75
});

let reveal = new Howl({
    src: [reveal1, reveal2]
});


const getDigitsArray = (number) => {
    let digits = [];
    if (number !== null) {
        let numString = number.toString();

        for (let i = 0; i < numString.length; i++) {
            digits.push(parseInt(numString.charAt(i)));
        }
    }

    return digits;
};

const SecondPage = () => {
    const videoPlayer = useRef()

    const [randomNumber, setRandomNumber] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);


    const handleMessage = (_e) => {
        setRandomNumber(null);
        sound.play()
        if (videoPlayer.current) {
            videoPlayer.current.currentTime = 0
            videoPlayer.current.play()
        }
        setTimeout(() => {
            const message = JSON.parse(localStorage.getItem('randomNumber'));
            if (message) {
                setRandomNumber(message.data);
                reveal.play()
            }

        }, 5000);
    };

    useEffect(() => {
        handleMessage();
        window.addEventListener('storage', handleMessage);

        return () => {
            window.removeEventListener('storage', handleMessage);
        };
    }, []);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    let randomItemNumbers = getDigitsArray(randomNumber);

    // useEffect(() => {
    //     const videoElement = document.getElementById('video');
    //     videoElement.addEventListener('loadeddata', handleVideoLoad);
    //
    //     return () => {
    //         videoElement.removeEventListener('loadeddata', handleVideoLoad);
    //     };
    // }, []);


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {/*<video width="320" height="240" controls>*/}
            {/*    <source src={myVideo} type="video/mp4"/>*/}
            {/*    Your browser does not support the video tag*/}
            {/*</video>*/}
            <video id="video" width="960" ref={videoPlayer} onLoadedData={handleVideoLoad} style={{
                position: "absolute",
                left: "calc(50% - 480px)",

            }}>
                {/*<source src="https://rotato.netlify.app/alpha-demo/movie-hevc.mov" type='video/mp4'; codecs="hvc1">*/}
                {/*<source src={myMov} type='video/mp4; codecs="hvc1"'/>*/}
                <source src={myWebm} type='video/webm'/>
                {/*<source src="../../public/temp.mp4" type='video/mp4' />*/}
            </video>
            {!videoLoaded && <div>Loading video...</div>}
            {videoLoaded && (
                <div className="id-picker-content-main-items">
                    {randomItemNumbers.map((v, i) => (
                        <Ball number={v} key={i}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SecondPage;