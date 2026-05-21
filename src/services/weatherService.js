import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;

const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const fetchWeatherData = async(cityName) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: cityName,
                appid: API_KEY,
                units: "metric",
                lang: 'en'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message)
        throw error
    }
}