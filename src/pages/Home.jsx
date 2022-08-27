import React, { useEffect } from 'react';
import Header from "../components/Header"
import LanguageCards from "../components/profile/LanguageCards"
import Backend from "../components/profile/Backend"
import Portfolio from "../components/profile/Portfolio"
import Footer from "../components/Footer"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <div className='head'>
                <h1>Développeur WEB</h1>
                <h2>Emilien VASCHALDE</h2>
                <div className='bottom'>
                    <img src="./assets/img/head2.svg" alt="svg décoration" />
                    <img src="./assets/img/head1.svg" alt="svg décoration" />
                </div>
            </div>

            <div className='section1'>
                <div className='photo_profile'>
                <img src="./assets/img/emilien5.png" alt="Emilien Vaschalde, développeur web" />
                {/* <Image  src="/assets/img/emilien5.png"  alt="Emilien Vaschalde, développeur web" width={350} height={320} /> */}
                </div>
                <p>
                Je suis développeur <span>front end</span> avec des notions de back end. <br />
                Spécialisé <span>ReactJs</span>
                </p>
            </div>

            <div className='language'>
                <img src="./assets/img/front.png" alt="Emilien vaschalde, developpeur front end" />
                <div className='ball ball-1'></div>
                <div className='ball ball-2'></div>
                <div className='ball ball-3'></div>
            </div>

            <LanguageCards />
            <Backend />

            <Portfolio />

            <Footer />
        </div>
    );
};

export default Home;