import React from "react";


const Result = ({cityWeather, closeCity}) => {
    const setDayOfWeek = (obj) => {
        const date = new Date(obj)
        return date.toLocaleString('default', { weekday: 'long'})
    }

    const timeOfDay = (time,cloud) => {
        const date = new Date(time)
        const dateHours =  date.getHours()
        if(dateHours >= 22 || dateHours < 6) {
            if(cloud >= 50){
                return 'assets/icons/partly-cloudy-night.svg'
            } return 'assets/icons/clear-night.svg'
        }else{
            if(cloud >= 50){
                return 'assets/icons/partly-cloudy-day.svg'
            } return 'assets/icons/clear-day.svg'
        }

    }


    const SingleCity = ({obj}) => {
        return (
            <>
                <div className="module module__weather" >
                    <button className="btn btn--icon btn--close" onClick={()=> closeCity(obj.city_id)}><i className="material-icons">close</i></button>

                    <div className="weather">
                        <div className="weather__icon"><img src={timeOfDay(obj.location.localtime, obj.current.cloud)} /*"assets/icons/partly-cloudy-day.svg"*//></div>

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
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[0].date)}</span> <img src={obj.forecast.forecastday[0].day.condition.icon}/>
                                <span className="temperature"><span className="temperature__value">{obj.forecast.forecastday[0].day.avgtemp_c}&deg;C</span></span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[1].date)}</span> <img src={obj.forecast.forecastday[1].day.condition.icon}/>
                                <span className="temperature"><span className="temperature__value">{obj.forecast.forecastday[1].day.avgtemp_c}&deg;C</span></span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[2].date)}</span> <img src={obj.forecast.forecastday[2].day.condition.icon}/>
                                <span className="temperature"><span className="temperature__value">{obj.forecast.forecastday[2].day.avgtemp_c}&deg;C</span></span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[3].date)}</span> <img src={obj.forecast.forecastday[3].day.condition.icon}/>
                                <span className="temperature"><span className="temperature__value">{obj.forecast.forecastday[3].day.avgtemp_c}&deg;C</span></span>
                            </li>

                            <li>
                                <span className="day">{setDayOfWeek(obj.forecast.forecastday[4].date)}</span> <img src={obj.forecast.forecastday[4].day.condition.icon}/>
                                <span className="temperature"><span className="temperature__value">{obj.forecast.forecastday[4].day.avgtemp_c}&deg;C</span></span>
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