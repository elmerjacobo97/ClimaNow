import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: '70d57e5b77a16783a4ff1a353c10fc97',
    units: 'metric',
    lang: 'es',
  },
});
