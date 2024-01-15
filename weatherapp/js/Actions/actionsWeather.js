const SWITCH_BUTTON = "SWITCH_BUTTON";

const NEW_WEATHER = "NEW_WEATHER";

const REMOVE_CITY = "REMOVE_CITY";

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

export {SWITCH_BUTTON, switchButton, NEW_WEATHER, newWeather, REMOVE_CITY, removeWeather};