import React from "react";
import getData from "../function/datafetch";
import {useState} from "react";

const Panel = ({switchButtonCity, switchWeather, addNewCity}) => {

    const [city, setCity] = useState("")

    const formHandler = (e) => {
        e.preventDefault()
        getData(city).then((r) => addNewCity(r)).then(() => setCity(''))
    }

    const inputHandler = (e) => {
        setCity(e.target.value)
        console.log(city)
    }

    return (
        <div className="module module__form" hidden={switchButtonCity}>
            <button className="btn btn--icon btn--close" onClick={() => switchWeather()}><i className="material-icons">close</i></button>
            <h2>Znajdź miasto</h2>

            <form noValidate autoComplete="off" className="find-city" onSubmit={(e) => formHandler(e)}>
                <input type="text" name="search" id="search" placeholder="np. Wrocław" value={city} onChange={(e) => inputHandler(e)} />
                <button type="submit"><i className="material-icons">search</i></button>
            </form>
            <div className="search-error"></div>
        </div>
    )
}

export default Panel;