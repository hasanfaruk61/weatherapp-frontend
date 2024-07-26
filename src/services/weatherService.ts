import axios from "axios";

const API_URL = "http://localhost:8080/api/weather";

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: { city },
    });
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
