import React from 'react';

const Backend = () => {
    const listeCards = [
        {
            titre : "PHP",
            liste : ["sans frameworks"]
        },
        {
            titre: "NodeJs",
            liste: ["Express"]
        },
        {
            titre : "Base de données",
            liste : ["mySql","mongoDB", "Firebase"]
        }
    ]

    return (
        <>
            <div className='backTitre'>Je ne suis pas développeur backend, <br /> mais voici quelques langages back que j'ai été amené à utiliser</div>
            <div className="languageCards">
            {
                listeCards.map((card, index) => (
                    <div className="card" key={index}>
                        <h3>{card.titre}</h3> 
                        <ul>
                            {
                                card.liste.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }                        
                        </ul>                       
                    </div>
                ))
            }
            </div>

        </>

    );
};

export default Backend;