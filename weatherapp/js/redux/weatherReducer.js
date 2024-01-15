import {combineReducers} from "redux";
import {SWITCH_BUTTON, NEW_WEATHER} from "../Actions/actionsWeather";

const initialWeatherState = {switch: true}
const weatherReducer = (state=initialWeatherState, action) => {
    switch (action.type) {
        case SWITCH_BUTTON:
            return {...state, switch: !state.switch}
        default:
            return state
    }
}

const cityWeatherStateInit = []

const cityReducer = (state=cityWeatherStateInit, action) => {
    switch (action.type){
        case NEW_WEATHER:
            return [...state, action.payload]
        default:
            return state
    }
}

export default combineReducers({
    weatherReducer,
    cityReducer
})
