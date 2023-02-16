import React from 'react';
import { useState } from 'react';
import LinkExpo from './LinkExpo';

const Portfolio2 = () => {

    const [displayLinkExpo, setDisplayLinkExpo] = useState({state: false, url: ""})

    const listeApp = [
        {
            title : "Movies & Series",
            img : "/assets/img/app7.jpg",
            desc: "Application fitness en version react native",
            languages : ["React JS", "Redux", "Styled Components"],
            link: {type: "web", url: "https://gentle-manatee-39b5d2.netlify.app/?ud=y"},
            git: "https://github.com/Emi-vas/Movies-Series_TypeScript"
        },
        {
            title : "Fitness (mobile)",
            img : "/assets/img/app6.jpg",
            desc: "Application fitness en version react native",
            languages : ["React Native","Expo", "React Navigation"],
            link: {type: "tel", url: "https://www.youtube.com/embed/jV5oCSAywFk"},
            git: "https://github.com/Emi-vas/FitnessApp_reactNative"
        },
        {
            title : "Fitness",
            img : "/assets/img/app4.png",
            desc: "Application fitness, exercices et vidéos.",
            languages : ["React JS","redux", "Material UI"],
            link:  {type: "web", url: "https://delicate-gumption-b3d096.netlify.app/"},
            git: "https://github.com/Emi-vas/FitnessApp_react"
        },
        {
            title : "NFT Crypto",
            img : "/assets/img/app5.jpg",
            desc: "Application suivi crypto monnaie",
            languages : ["React Native","Expo"],
            link: {type: "tel", url: "https://www.youtube.com/embed/87IxN370lP0"},
            git: "https://github.com/Emi-vas/NFT_reactNative/blob/main/App.js"
        },
        {
            title : "YoutubeLike",
            img : "/assets/img/app3.png",
            desc: "Application avec utilisation de l'api youtube.",
            languages : ["React JS", "Material UI"],
            link: {type: "web", url: "https://630dce83cfd2db23e233edaa--wondrous-praline-b1b0c0.netlify.app/"},
            git: "https://github.com/Emi-vas/YoutubeLike_React"
        },
    ]

    return (
        <div>
            <h2 className='h2-small'>Autres applications React</h2>
            <div className='portfolio2'>
            {
                listeApp.map((app, index) => (
                    <div className='card' key={index}>
                        <img src={app.img} alt="" />
                        <div className='txt'>
                            <h3>{app.title}</h3>
                            <p>{app.desc}</p>
                            <ul>
                                {
                                    app.languages.map((language, index) => (
                                        <li key={index}>{language}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='buttons-bloc'>
                            {
                                app.link.type == "web" ? (
                                    <a href={app.link.url} target="blank">
                                        Voir l'app
                                    </a>
                                ) : (
                                    <a onClick={()=> {
                                        setDisplayLinkExpo({state: true, url: app.link.url})
                                        document.querySelector('html').style.overflowY = "hidden"
                                    }}>
                                        Voir l'app
                                    </a>
                                )
                            }
                            <a href={app.git} target="blank">
                                GIT
                            </a>
                           
                        </div>
                        {
                            displayLinkExpo.state && displayLinkExpo.url == app.link.url &&
                            <LinkExpo setDisplayLinkExpo={setDisplayLinkExpo} videoUrl={app.link.url} />
                        }
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Portfolio2;