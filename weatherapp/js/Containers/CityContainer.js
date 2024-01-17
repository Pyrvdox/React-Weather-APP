import React from "react";
import {connect} from "react-redux";
import Result from "../Components/Result";
import { removeWeather, chanageName } from "../Actions/actionsWeather";

const CityContainer = (props) => {
    return <Result {...props}/>
}

const mapState = (state) => {
    return{
        cityWeather: state.cityReducer,
    }
}

const mapDispatch = (dispatch) => {
    return{
        closeCity: (city_id) => {
            dispatch(removeWeather(city_id))},
        editCityName: (id, name) => {
            dispatch(chanageName(id, name))
        },
    }
}

export default connect(mapState, mapDispatch)(CityContainer)