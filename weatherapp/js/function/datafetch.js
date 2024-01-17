

const key = "e28659e645184311b2f182600241501";
/*nazwa_miasta_lub_auto:ip*/
const getData = async (city) => {
    try {
        const fetching = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city === "" ? 'auto:ip' : city}&days=5`)
        const data = await fetching.json()
        return data
    }catch (error) {
        console.error("Error: ", error.message)
    }
}

export default getData;