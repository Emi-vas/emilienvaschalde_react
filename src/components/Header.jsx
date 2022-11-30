import { NavLink } from "react-router-dom"
import React, { useState } from 'react';
import MessageBox from './profile/MessageBox';

const Header = ({ cate}) => {
    const [displayMessageBox, setDisplayMessageBox] = useState(false)

    const closeMessageBox = () => {
        document.getElementById("messageBox").style.animation = "messageBoxOff 0.3s both"
        setTimeout(() => {
            setDisplayMessageBox(false)
        }, 300)
    }

    const handleMessage = () => {
        if(displayMessageBox == true) {
            closeMessageBox()
        } else {
            setDisplayMessageBox(true)
        }
    }

    return (
        <>
        <div className='header'>
            <nav>
                <NavLink to="/" className={cate == "home" ? "lien lien--actif" : "lien"}>
                    <i className="fa-solid fa-user"></i>
                    <p>Profil</p>
                    <p>Développeur</p>
                </NavLink>
                <NavLink to="/retouche-image-app" className={cate == "picture" ? "lien lien--actif" : "lien"}>
                    <i className="fa-solid fa-image"></i>
                    <p>APP 1</p>
                    <p>retouche image</p>
                </NavLink>
                <a className="lien" href="https://gentle-manatee-39b5d2.netlify.app/">
                    <i class="fa-solid fa-film"></i>
                    <p>APP 2</p>
                    <p>Movies & Series</p>
                </a>

                <div onClick={handleMessage} className={displayMessageBox ? "lien lien--actif" : "lien"}>
                    <i className="fa-solid fa-comment"></i>
                    <p>Contact</p>
                    <p></p>
                </div>
            </nav>
        </div>

        {
            displayMessageBox && <MessageBox setDisplayMessageBox={setDisplayMessageBox} displayMessageBox={displayMessageBox}/> 
        }
        </>
    );
};

export default Header;