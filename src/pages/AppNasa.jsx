import React, { useEffect } from 'react';
import Map from '../components/app_nasa/fireBall/Map';
import DayPicture from '../components/app_nasa/DayPicture';
import VideoEarth from '../components/app_nasa/VideoEarth';
import MarsRover from '../components/app_nasa/Mars/MarsRover';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppNasa = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <h1>Nasa App</h1>

            <VideoEarth />
            <DayPicture />
            <Map></Map>
            <MarsRover />

            <Footer />
        </div>
    );
};

export default AppNasa;