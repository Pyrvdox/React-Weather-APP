import React from "react";

const Result = ({cityWeather}) => {


    return (
        <>
            <div className="module module__weather" >
                <button className="btn btn--icon btn--close"><i className="material-icons">close</i></button>

                <div className="weather">
                    <div className="weather__icon"><img src="assets/icons/partly-cloudy-day.svg"/></div>

                    <div className="weather__info">
                        <div className="city">
                            <span className="city__name">Wrocław</span> <span className="btn btn--icon"><i
                            className="material-icons">edit</i></span>
                        </div>
                        <div className="temperature"><span className="temperature__value">16.5</span>&deg;C</div>
                    </div>

                    <ul className="weather__details">
                        <li><img src="assets/icons/pressure.svg"/> <span className="pressure__value">998 hPa</span></li>
                        <li><img src="assets/icons/humidity.svg"/> <span className="humidity__value">45%</span></li>
                        <li><img src="assets/icons/wind-speed.svg"/> <span className="wind-speed__value">5.5 m/s</span>
                        </li>
                    </ul>

                    <ul className="weather__forecast">
                        <li>
                            <span className="day">Wtorek</span> <img src="assets/icons/clear-day.svg"/>
                            <span className="temperature"><span className="temperature__value">10.0</span>&deg;C</span>
                        </li>

                        <li>
                            <span className="day">Środa</span> <img src="assets/icons/snow.svg"/>
                            <span className="temperature"><span className="temperature__value">-2.3</span>&deg;C</span>
                        </li>

                        <li>
                            <span className="day">Czwartek</span> <img src="assets/icons/rain.svg"/>
                            <span className="temperature"><span className="temperature__value">4.8</span>&deg;C</span>
                        </li>

                        <li>
                            <span className="day">Piątek</span> <img src="assets/icons/cloudy.svg"/>
                            <span className="temperature"><span className="temperature__value">5.0</span>&deg;C</span>
                        </li>

                        <li>
                            <span className="day">Sobota</span> <img src="assets/icons/hail.svg"/>
                            <span className="temperature"><span className="temperature__value">8.6</span>&deg;C</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="loading">
                <div className="dual-ring"></div>
            </div>
        </>
    )
}

export default Result;