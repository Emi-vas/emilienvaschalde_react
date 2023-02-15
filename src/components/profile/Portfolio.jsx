import { NavLink } from "react-router-dom"
import { useState } from "react";
import Form2 from "../svg/Form2";
import From1 from "../svg/From1";

const Portfolio = () => {
    //App selected by user
    const [appActive, setAppActive] = useState("")

    const appListe = [
        {
            title : "App 1",
            desc : "Application de retouche d'image",
            img : "./assets/img/app1.jpg",
            link: "./retouche-image-app",
            git: "https://github.com/Emi-vas/edit-image-app"
        },
        {
            title : "App 2",
            desc : "Boutique en ligne avec outil d'aide au choix d'achat",
            img : "./assets/img/app2.jpg",
            link : "https://guitare-passion.netlify.app/",
            git: "https://github.com/Emi-vas/guitare-passion"
        },
    ]

    const clickApp = (appTitle) => {
        if(appActive == appTitle) {
            setAppActive("")
        } else {
            setAppActive(appTitle)
        }
    }

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="liste">
                {
                    appListe.map((app, index) => (
                        <div key={index} className="app_cont">
                            <div  
                            onClick={()=>clickApp(app.title)} 
                            style={{transform : appActive == app.title ? "scaleX(0.5) translateX(-50%)" : ""}} 
                            className="app">
                                <div className="app__txt">
                                    <h3>{app.title}</h3>
                                    <p>{app.desc}</p>
                                </div>
                                <div className="app__img">
                                    <img src={app.img} alt={app.desc + ", Emilien Vaschalde développeur web"} />
                                </div>
                            </div>

                            {
                                appActive == app.title &&
                                <div className="options">
                                    <From1 />
                                    <Form2 />
                                    { app.title == "App 1" && <NavLink to={app.link} className="btn">Voir l'app</NavLink> }
                                    { 
                                      app.title == "App 2" && 
                                        <a 
                                            href={app.link} 
                                            className="btn"
                                        >Voir l'app</a> 
                                    }
                                    <a href={app.git} className="btn" target="blank">GIT</a>
                                </div>
                            }
                        </ div>
                    ))
                }
            </div>

        </div>
    );
};

export default Portfolio;