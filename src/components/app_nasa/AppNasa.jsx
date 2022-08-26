import React from 'react';
import Map from './fireBall/Map';
import DayPicture from './DayPicture';
import VideoEarth from './VideoEarth';
import MarsRover from './Mars/MarsRover';

const AppNasa = () => {
    return (
        <div>
            <h1>Nasa App</h1>

            <VideoEarth />
            <DayPicture />
            <Map />
            <MarsRover />
        </div>
    );
};

export default AppNasa;