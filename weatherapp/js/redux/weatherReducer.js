import {combineReducers} from "redux";
import {SWITCH_BUTTON} from "../Actions/actionsWeather";

const initialWeatherState = {switch: true}
const weatherReducer = (state=initialWeatherState, action) => {
    switch (action.type) {
        case SWITCH_BUTTON:
            return {...state, switch: !state.switch}
        default:
            return state
    }
}

export default combineReducers({
    weatherReducer,
})
