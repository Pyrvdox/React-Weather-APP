import React from "react";
import {connect} from "react-redux";
import Result from "../Components/Result";
import { removeWeather } from "../Actions/actionsWeather";

const CityContainer = (props) => {
    return <Result {...props}/>
}

const mapState = (state) => {
    return{
        cityWeather: state.cityReducer
    }
}

const mapDispatch = (dispatch) => {
    return{
        closeCity: (city_id) => {
            console.log('index to remove', city_id)
            
            dispatch(removeWeather(city_id))}

    }
}

export default connect(mapState, mapDispatch)(CityContainer)