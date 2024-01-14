import React from "react";

const Header = ({switchWeather}) => {
    return (
        <header>
            <div className="container">
                <div className="logo"><img src="assets/icons/logo.svg"/> Weather App</div>
                <button className="btn" id="add-city" onClick={() => switchWeather()}>Dodaj miasto <i className="material-icons">add_circle</i></button>
            </div>
        </header>
    )
}
export default Header;
