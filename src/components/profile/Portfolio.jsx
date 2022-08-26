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
            desc : "Application de dialogue avec l'api publique de la NASA",
            img : "./assets/img/app2.jpg",
            link : "./nasa-app",
            git: "https://github.com/Emi-vas/nasaApp"
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
                        
/*                     <Link href={app.link} key={index} onClick={clickApp}><a className="app" >
                            <div className="app__txt">
                                <h3>{app.title}</h3>
                                <p>{app.desc}</p>
                            </div>
                            <div className="app__img">
                                <img src={app.img} alt={app.desc + ", Emilien Vaschalde développeur web"} />
                            </div>
                        </a></Link> */
                        <>
                            <div  
                            key={index} 
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
                                    <NavLink to={app.link} className="btn">Voir l'app</NavLink>
                                    <a href={app.git} className="btn" target="blank">GIT</a>
                                </div>
                            }
                        </>
                    ))
                }
            </div>

        </div>
    );
};

export default Portfolio;