import IllustrationDesktop from "../assets/illustration-sign-up-desktop.svg"
import "./MainPage.scss"

function MainPage(){
    return(
        <body>
            <main>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
                <section className="content-container">
                    <h1 className="title">Stay updated!</h1>
                    <p className="main-text">Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className="features main-text">
                        <li className="features-item">Product discovery and building what matters</li>
                        <li className="features-item">Measuring to ensure updates are a success</li>
                        <li className="features-item">And much more!</li>
                    </ul>
                    <div className="input-form">
                        <span className="email">Email address</span>
                        <input className="email-input" placeholder="email@company.com"></input>
                    </div>
                    <button className="submit-button">Subscribe to monthly newsletter</button>
                </section>
                <img alt="main-image" className="main-image" src={IllustrationDesktop} />
            </main>

        </body>
    )
}

export default MainPage;