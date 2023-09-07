import React from 'react';

const colors = [
    "green",
    "red",
    "blue",
    "black",
    "orange",
    "purple",
    "grey",
    "pink",
    "violet",
    "lime",
    "crimson"
]

const getRandomColorIndex = (n) => {
    return Math.floor(Math.random() * n) + 1;
}

const Ball = ({number = 10}) => {
    let colorIndex = getRandomColorIndex(colors.length)
    return (
        <div className="ball"
             style={{
                 background: colors[colorIndex - 1],
                 boxShadow: `0px 0px 16px ${colors[colorIndex - 1]}`,
                 border: "2px solid white",
                 animationDelay: `${(0.5 * Math.random()) + 0.5}s`,
                 animation: `ball-scale ${(0.5 * Math.random()) + 0.5}s cubic-bezier(0,0, 0.5, 1.25)`
             }}>
            <div className="ball-specular"></div>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h4 style={{fontSize: "64px"}}>{number}</h4>
            </div>

        </div>
    );
};

export default Ball;