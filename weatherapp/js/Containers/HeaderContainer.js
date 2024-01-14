import React from "react";
import {connect} from "react-redux";
import Header from "../Components/Header";
import {switchButton} from "../Actions/actionsWeather";
const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
}

const mapDispatch = (dispatch) => {
    return {
       switchWeather: () => {
           dispatch(switchButton())
       }
    }
}

export default connect(null, mapDispatch)(HeaderContainer)