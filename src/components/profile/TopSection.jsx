import React from 'react';
import ReactPlayer from 'react-player';

const TopSection = () => {
    return (
        <div className='head'>
            <div className='video'>
                <ReactPlayer
                    url="./assets/videos/stars.mp4" 
                    playing loop={true} muted 
                    width={"2000px"}
                    height={"1200px"}
                />
            </div>
            <h1>Développeur WEB</h1>
            <h2>Emilien VASCHALDE</h2>
            <img src="./assets/img/forme1.svg" alt="forme" className="form1" />
            <img src="./assets/img/forme2.svg" alt="forme" className="form2" />
        </div>
    );
};

export default TopSection;