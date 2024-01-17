import {combineReducers} from "redux";
import {SWITCH_BUTTON, NEW_WEATHER, REMOVE_CITY, CHANGE_NAME} from "../Actions/actionsWeather";

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
    if (state.length === 0){
        return 0
    }
    return state.reduce((acc, currrent) => acc < currrent.city_id ? currrent.city_id : acc, 0) + 1

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
        case CHANGE_NAME:
            case CHANGE_NAME:
                // //Clear code for changing name of city
                // let newNameCity = state.map((obj, id, table, id_change=action.payload.id, name=action.payload.name) => {
                //     if (obj.city_id === id_change) {
                //         let newLocation = {...obj.location, name: name}
                //         return {...obj, location:{...newLocation}}
                //     }
                //     return obj
                // })
                // return newNameCity;
                let newNameCity = state.map((obj, id, table, id_change=action.payload.id, name=action.payload.name) => {
                    let newLocation = {...obj.location, name: name}
                    return obj.city_id === id_change? obj={...obj, location:{...newLocation}} : obj})
                return newNameCity;
        default:
            return state
    }
}


export default combineReducers({
    weatherReducer,
    cityReducer,
})
