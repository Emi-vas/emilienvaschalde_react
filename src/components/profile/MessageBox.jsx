//Contact form

import { useEffect } from "react";

const MessageBox = ({setDisplayMessageBox, displayMessageBox}) => {

    const handleScroll = () => {
        //close component on scroll
        document.getElementById("messageBox").style.animation = "messageBoxOff 0.3s both"
        setTimeout(() => {
            setDisplayMessageBox(false)
        }, 300)
    };
    
     useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // cleanup this component
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="messageBox" id="messageBox">
            <div className="txt">
                <h2>Emilien Vaschalde</h2>
                <p>06 62 42 53 97</p>
                <p>emilienvaschalde@yahoo.fr</p>
            </div>
            <form>
                <input type="text" placeholder="Votre nom*" />
                <input type="text" placeholder="Votre mail*" />
                <textarea placeholder="Message..."></textarea>
                <button>Envoyer</button>
            </form>
        </div>
    );
};

export default MessageBox;