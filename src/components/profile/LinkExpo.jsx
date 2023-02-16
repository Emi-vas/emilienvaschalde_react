import React from 'react';

const LinkExpo = ({videoUrl, setDisplayLinkExpo}) => {

    const handeClose = () => {
        document.querySelector('html').style.overflowY = "scroll"
        setDisplayLinkExpo({state: false, url: ""})

    }

    return (
        <div
            className='appMobile'
            style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(50, 91, 117, 0.95)',
                zIndex: 3,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

            }}
        >
            <iframe 
               
                src={videoUrl}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
            <div
                onClick={handeClose}
                style={{
                    cursor: "pointer",
                    fontSize: "1.1em",
                    fontWeight: "bold",
                    textDecoration: "underline"
                }}
            >
                fermer
            </div>
        </div>
    );
};

export default LinkExpo;