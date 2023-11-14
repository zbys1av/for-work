import React from "react"
import ReactDOM from 'react-dom/client';


function Header(){
    return(
        <header className="header">
            <div className="header__box">
                <div className="header__logo-section">
                    <img className="header__logo" width={50} alt="troll face" src="https://cdn-icons-png.flaticon.com/512/4804/4804223.png"/>
                    <span className="header__logo-text">-__-</span>
                </div>
                <p className="header__text">
                    Boosta is fucking shit kantora
                </p>
            </div>
        </header>
    )
}

export default Header;