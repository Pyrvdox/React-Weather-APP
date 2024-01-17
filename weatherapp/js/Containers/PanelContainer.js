import React from "react";
import Panel from "../Components/Panel";
import {connect} from "react-redux";
import {newWeather, switchButton} from "../Actions/actionsWeather";

const PanelContainer = (props) => {
    return (
        <Panel {...props} />
    )
}

const mapState = (state) => {
    return {
        switchButtonCity: state.weatherReducer.switch
    }
}
const mapDispatch = (dispatch) => {
    return {
        switchWeather: () => {
            dispatch(switchButton())
        },
        addNewCity: (obj) => {
            dispatch(newWeather(obj))}
    }
}

export default connect(mapState, mapDispatch)(PanelContainer);