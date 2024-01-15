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
    console.log('state for button add city',state.weatherReducer.switch)
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
            console.log('Dispaczowy console log:', obj)
            dispatch(newWeather(obj))}
    }
}

export default connect(mapState, mapDispatch)(PanelContainer);