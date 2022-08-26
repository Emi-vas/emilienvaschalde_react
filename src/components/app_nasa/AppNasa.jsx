import React from 'react';
import Map from './fireBall/Map';
import DayPicture from './DayPicture';
import VideoEarth from './VideoEarth';
import MarsRover from './Mars/MarsRover';
import Header from '../Header';
import Footer from '../Footer';

const AppNasa = () => {
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