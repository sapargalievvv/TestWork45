import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
    lang: 'en'
  }
});

export const getCurrentWeather = async (city: string) => {
  const response = await weatherApi.get('/weather', {
    params: { q: city }
  });
  return response.data;
};

export const getForecast = async (city: string) => {
  const response = await weatherApi.get('/forecast', {
    params: { q: city }
  });
  return response.data;
}; 