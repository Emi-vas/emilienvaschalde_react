//Contact form
import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const MessageBox = ({setDisplayMessageBox, displayMessageBox}) => {

    const closeForm = () => {
        //close component on scroll
        document.getElementById("messageBox").style.animation = "messageBoxOff 0.3s both"
        setTimeout(() => {
            setDisplayMessageBox(false)
        }, 300)
    };
    
     useEffect(() => {
        //only on desktop
        if(window.innerWidth > 500) {
            window.addEventListener('scroll', closeForm);
            // cleanup this component
            return () => {
            window.removeEventListener('scroll', closeForm);
            };
        }
      }, []);

    return (
        <div className="messageBox" id="messageBox">
            <div className="txt">
                <h2>Emilien Vaschalde</h2>
                <p>06 62 42 53 97</p>
            </div>
           <FormContact closeForm={closeForm} />
        </div>
    );
};

export default MessageBox;




const FormContact = ({ closeForm }) => {
    const form = useRef()
    const [button, setButton] = useState(false)
    const [infoBloc, setInfoBloc] = useState("")

    const serviceId = process.env.REACT_APP_SERICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    const icons = {
        valide: "fa-solid fa-check",
        notValide: "fa-solid fa-xmark",
        spinner: "fa-solid fa-spinner spinner"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setButton(true) //disable button

        setInfoBloc("loader")
        /* Send Email */
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            setButton(false)
            setInfoBloc("valide")
            setTimeout(() => {
                closeForm()
            }, 2000)
        }, (error) => {
            console.log(error.text);
            setInfoBloc("notValide")
            setButton(false)
        });
    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Votre nom*" name="name" required />
            <input type="mail" placeholder="Votre mail*" name="email" required/>
            <textarea placeholder="Message..." name="message"></textarea>
            <div >
                {infoBloc == "loader" && <BlocInfo text="" icon={icons.spinner} />}
                {infoBloc == "valide" && <BlocInfo text="Le message a été envoyé !" icon={icons.valide} />}
                {infoBloc == "notValide" && <BlocInfo text="Une erreur a eu lieu !" icon={icons.notValide} />}
            </div>
            <button type="submit" disabled={button}>Envoyer</button>
        </form>
    )
}

const BlocInfo = ({ text, icon }) => {
    return(
        <div className="infoBloc">
            <i className={icon}></i>
            {
                text && <p>{ text }</p>
            }
        </div>
    )
}