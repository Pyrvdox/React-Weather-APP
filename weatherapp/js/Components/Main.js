import React from "react";

import PanelContainer from "../Containers/PanelContainer";
import Result from "./Result";
import CityContainer from "../Containers/CityContainer";

const Main = () => {
    return (
        <section id="app" className="container">
            <PanelContainer />
            <CityContainer />
        </section>
    )
}

export default Main;
