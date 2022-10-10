
const languageCards = () => {
    const listeCards = [
        {
            titre : "JAVASCRIPT",
            liste : ["React JS", "Redux", "Next JS", "React native"]
        },
        {
            titre : "CSS",
            liste : ["Styled Components","Sass","Tailwind", "Material-UI"]
        }
    ]

    return (
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
    );
};

export default languageCards;