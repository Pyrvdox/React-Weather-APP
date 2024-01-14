import React from "react";

import PanelContainer from "../Containers/PanelContainer";
import Result from "./Result";

const Main = () => {
    return (
        <section id="app" className="container">

            {/*Moduł wyszukiwarki - domyślnie ukryty */}
            <PanelContainer />


               {/*Moduł pogody*/}
               {/*Poniższy kod możecie potraktować jako template do kolejnych modułów*/}
               {/*Możecie go sklonować używając metody cloneNode(true), i powstawiać odpowiednie wartości z aktualnego miasta.*/}

            <Result />
        </section>
    )
}

export default Main;
