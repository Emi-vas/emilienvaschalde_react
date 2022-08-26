import React from 'react';

const MarsIcon = ({ setListSelected, name }) => {

    const handleClic = () => {
        //handle the cam pictures list
        setListSelected(name)

        //handle the position of the page
        const rover = document.getElementById('rover') //pic of rover
        const pos = rover.getBoundingClientRect().top
        if(pos > 0) {
            setTimeout(() => {
                rover.scrollIntoView()
            }, 30)
        }
    }

    return (
        <div className={`marsIcon marsIcon--${name}`}  onClick={handleClic}>
            <i className="fa-brands fa-galactic-republic"></i>
            <i className="fa-solid fa-camera"></i>
        </div>
    );
};

export default MarsIcon;