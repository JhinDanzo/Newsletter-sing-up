import IllustrationDesktop from "../assets/illustration-sign-up-desktop.svg"

function MainPage(){
    return(
        <body>
            <main className="main-container">
                <div className="content-container">
                    <h1></h1>
                    <p className="main-text"></p>
                    <ul className="features main-text">
                        <li className="features-item"></li>
                        <li className="features-item"></li>
                        <li className="features-item"></li>
                    </ul>
                    <span className="email"></span>
                    <input></input>
                    <button></button>
                </div>
                <img alt="main_image" className="main_image" src={IllustrationDesktop} />
            </main>

        </body>
    )
}

export default MainPage;