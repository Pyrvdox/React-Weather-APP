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
const cityIndex = (state) => {
    const stateLenght = state.length +1
    return stateLenght
}

const cityReducer = (state=cityWeatherStateInit, action) => {
    switch (action.type){
        case NEW_WEATHER:
            return [...state, {city_id: cityIndex(state), ...action.payload}]
        default:
            return state
    }
}

export default combineReducers({
    weatherReducer,
    cityReducer
})
