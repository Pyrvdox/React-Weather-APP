import React from "react";

import PanelContainer from "../Containers/PanelContainer";
import Result from "./Result";

const Main = () => {
    return (
        <section id="app" className="container">
            <PanelContainer />
            <Result />
        </section>
    )
}

export default Main;
