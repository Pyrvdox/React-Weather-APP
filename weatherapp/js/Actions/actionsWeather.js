const SWITCH_BUTTON = "SWITCH_BUTTON";
const NEW_WEATHER = "NEW_WEATHER";
const REMOVE_CITY = "REMOVE_CITY";
const CHANGE_NAME = "CHANGE_NAME";


const switchButton = () => {
    return {
        type: SWITCH_BUTTON,
    }
}
const newWeather = (obj) => {
    return {
        type: NEW_WEATHER,
        payload: obj
    }
}
const removeWeather = (id) => {
    return {
        type: REMOVE_CITY,
        payload: id
    }
}
const chanageName = (id, name) => {
    return {
        type: CHANGE_NAME,
        payload: {id, name}
    }
}

export {SWITCH_BUTTON, switchButton, 
    NEW_WEATHER, newWeather, 
    REMOVE_CITY, removeWeather, 
    CHANGE_NAME, chanageName, 
};