import "./Succes.scss";
import "../MainPage/MainPage.scss";
import CheckMark from "../assets/icon-list.svg"
import { useNavigate, useLocation } from "react-router-dom";

function SuccesMessage(){

    const location = useLocation();
    const {email} = location.state || {};
    const retunToMain = useNavigate();

    const handleOpenMainPage = () => {
        retunToMain('/');
    }

    return(
    <div className="body">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        <div className="sucess-container">
            <img className="check-mark" alt="check-mark" src={CheckMark}></img>
            <h1 className="title">Thanks for subscribing!</h1>
            <p className="main-text"> 
                A confirmation email has been sent to <strong>{email}</strong>. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button className="exit-button" onClick={handleOpenMainPage}>Dismiss message</button>
        </div>
    </div>)
}

export default SuccesMessage;