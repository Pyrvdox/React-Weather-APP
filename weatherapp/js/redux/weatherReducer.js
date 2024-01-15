import {combineReducers} from "redux";
import {SWITCH_BUTTON, NEW_WEATHER, REMOVE_CITY} from "../Actions/actionsWeather";

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
    const stateLenght = state.length
    return stateLenght
}

const cityReducer = (state=cityWeatherStateInit, action) => {
    switch (action.type){
        case NEW_WEATHER:
            return [...state, {city_id: cityIndex(state), ...action.payload}]
        case REMOVE_CITY:

            const newState = state.filter(obj => {
                if(obj.city_id !== action.payload){
                    return obj
                }
            })

            return newState;
        default:
            return state
    }
}

export default combineReducers({
    weatherReducer,
    cityReducer
})
