import IllustrationDesktop from "../assets/illustration-sign-up-desktop.svg"
import IllustrationMobile from '../assets/illustration-sign-up-mobile.svg'
import "./MainPage.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage(){

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("no issue")
        if (!validateEmail(email)) {
            setError('Valid email required');
          } else {
            setError('');
            navigate("/success", {state: {email}});
          }
    }

    return(
        <div className="body">
            <header>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </header>
            <main>
                
                <img alt="main-image-mobile" className="main-image-mobile" src={IllustrationMobile}></img>
                <section className="content-container">
                    <h1 className="title">Stay updated!</h1>
                    <p className="main-text">Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className="features main-text">
                        <li className="features-item">Product discovery and building what matters</li>
                        <li className="features-item">Measuring to ensure updates are a success</li>
                        <li className="features-item">And much more!</li>
                    </ul>
                    <form className="input-form" onSubmit={handleSubmit} >
                        <span className="email">Email address</span>
                        {error && <span className="error-message">{error}</span>}
                        <div>
                            <input  type="text"
                                    placeholder="email@company.com" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className={error ? 'email-input input-error' : 'email-input'} 
                                    /> 
                            <button className="submit-button" type="submit">Subscribe to monthly newsletter</button>
                        </div>
                    </form> 
                </section>
                <img alt="main-image" className="main-image" src={IllustrationDesktop} />
            </main>

        </div>
    )
}

export default MainPage;