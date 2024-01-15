const SWITCH_BUTTON = "SWITCH_BUTTON";

const NEW_WEATHER = "NEW_WEATHER";

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

export {SWITCH_BUTTON, switchButton, NEW_WEATHER, newWeather};