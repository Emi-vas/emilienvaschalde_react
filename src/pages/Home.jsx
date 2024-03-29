import React, { useEffect } from 'react';
import Header from "../components/Header"
import LanguageCards from "../components/profile/LanguageCards"
import Backend from "../components/profile/Backend"
import Portfolio from "../components/profile/Portfolio"
import Footer from "../components/Footer"
import Portfolio2 from '../components/profile/Portfolio2';
import TopSection from '../components/profile/TopSection';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <TopSection />

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
            <Portfolio2/>

            <Footer />
        </div>
    );
};

export default Home;