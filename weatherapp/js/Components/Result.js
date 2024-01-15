import React from "react";


const Result = ({cityWeather}) => {

    const setDayOfWeek = (obj) => {
        console.log(obj)
        const date = new Date(obj)
        return date.toLocaleString('default', { weekday: 'long'})
    }
    const SingleCity = ({obj}) => {
        return (
            <>
                <div className="module module__weather" >
                    <button className="btn btn--icon btn--close"><i className="material-icons">close</i></button>

                    <div className="weather">
                        <div className="weather__icon"><img src="assets/icons/partly-cloudy-day.svg"/></div>

                        <div className="weather__info">
                            <div className="city">
                                <span className="city__name">{obj.location.name}</span> <span className="btn btn--icon"><i
                                className="material-icons">edit</i></span>
                            </div>
                            <div className="temperature"><span className="temperature__value">{obj.current.temp_c}</span>&deg;C</div>
                        </div>

                        <ul className="weather__details">
                            <li><img src="assets/icons/pressure.svg"/> <span className="pressure__value">{obj.current.pressure_mb} hPa</span></li>
                            <li><img src="assets/icons/humidity.svg"/> <span className="humidity__value">{obj.current.humidity}%</span></li>
                            <li><img src="assets/icons/wind-speed.svg"/> <span className="wind-speed__value">{obj.current.vis_km} m/s</span>
                            </li>
                        </ul>

                        <ul className="weather__forecast">
                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[0].date)}</span> <img src="assets/icons/clear-day.svg"/>
                                <span className="temperature"><span className="temperature__value">10.0</span>&deg;C</span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[1].date)}</span> <img src="assets/icons/snow.svg"/>
                                <span className="temperature"><span className="temperature__value">-2.3</span>&deg;C</span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[2].date)}</span> <img src="assets/icons/rain.svg"/>
                                <span className="temperature"><span className="temperature__value">4.8</span>&deg;C</span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[3].date)}</span> <img src="assets/icons/cloudy.svg"/>
                                <span className="temperature"><span className="temperature__value">5.0</span>&deg;C</span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[4].date)}</span> <img src="assets/icons/hail.svg"/>
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

    return cityWeather.map((obj) => <SingleCity key={obj.city_id} obj={obj}/>)


}

export default Result;