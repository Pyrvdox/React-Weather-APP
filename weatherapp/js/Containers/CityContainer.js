import React from "react";
import {connect} from "react-redux";
import Result from "../Components/Result";
import {newWeather} from "../Actions/actionsWeather";


const CityContainer = (props) => {
    return <Result {...props}/>
}

const mapState = (state) => {
    return{
        cityWeather: state.cityReducer
    }
}

/*const mapDispatch = (dispatch) => {
    return{

    }
}*/

export default connect(mapState, null)(CityContainer)