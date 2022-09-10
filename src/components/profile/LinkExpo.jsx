import React from 'react';

const LinkExpo = ({QRurl, setDisplayLinkExpo}) => {

    const handeClose = () => {
        document.querySelector('html').style.overflowY = "scroll"
        setDisplayLinkExpo({state: false, url: ""})

    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(50, 91, 117, 0.9)',
                zIndex: 3,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",

                paddingBottom: "300px"
            }}
        >

            <h2>Pour acceder à l'application :</h2>
            <ol
                style={{ fontSize: "1.1em" }}
            >
                <li>Telechargez l'application : <strong>Expo Go</strong></li>
                <li>Scannez le QR code :</li>
            </ol>

            <img src={QRurl} alt="qr code de l'application" style={{ width: "300px", height: "300px" }} />

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