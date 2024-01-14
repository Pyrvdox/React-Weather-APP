import React from "react";

const Panel = ({switchButtonCity, switchWeather}) => {
    return (
        <div className="module module__form" hidden={switchButtonCity}>
            <button className="btn btn--icon btn--close" onClick={() => switchWeather()}><i className="material-icons">close</i></button>
            <h2>Znajdź miasto</h2>

            <form noValidate autoComplete="off" className="find-city">
                <input type="text" name="search" id="search" placeholder="np. Wrocław"/>
                <button type="submit"><i className="material-icons">search</i></button>
            </form>
            <div className="search-error"></div>
        </div>
    )
}

export default Panel;