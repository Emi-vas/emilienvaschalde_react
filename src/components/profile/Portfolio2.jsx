import React from 'react';

const Portfolio2 = () => {

    const listeApp = [
        {
            title : "YoutubeLike",
            img : "/assets/img/app3.png",
            desc: "Application avec utilisation de l'api youtube.",
            languages : ["React JS", "Material UI"],
            link: "https://630dce83cfd2db23e233edaa--wondrous-praline-b1b0c0.netlify.app/",
            git: "https://github.com/Emi-vas/YoutubeLike_React"
        },
        {
            title : "Fitness",
            img : "/assets/img/app4.png",
            desc: "Application fitness, exercices et vidéos.",
            languages : ["React JS","redux", "Material UI"],
            link: "https://delicate-gumption-b3d096.netlify.app/",
            git: "https://github.com/Emi-vas/FitnessApp_react"
        }
    ]

    return (
        <div>
            <h2 className='h2-small'>Autres applications React</h2>
            <div className='portfolio2'>
            {
                listeApp.map((app) => (
                    <div className='card'>
                        <img src={app.img} alt="" />
                        <div className='txt'>
                            <h3>{app.title}</h3>
                            <p>{app.desc}</p>
                            <ul>
                                {
                                    app.languages.map((language) => (
                                        <li>{language}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='buttons-bloc'>
                            <a href={app.link} target="blank">
                                Voir l'app
                            </a>
                            <a href={app.git} target="blank">
                                GIT
                            </a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Portfolio2;