import { MD2Colors } from 'react-native-paper';
import { WeatherConfig, WeatherData } from '../interfaces';

export const formatTime = (timestamp: number): string => {
  const date: Date = new Date(timestamp * 1000);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

export const currentTime: number = new Date().getTime() / 1000; // Obtener la hora actual en segundos

export const getWeatherConfig = (weatherData: WeatherData): WeatherConfig => {
  const currentTime = new Date().getTime();
  const sunriseTime = (weatherData.sys?.sunrise + weatherData.timezone) * 1000;
  const sunsetTime = (weatherData.sys?.sunset + weatherData.timezone) * 1000;

  const isDaytime = currentTime >= sunriseTime && currentTime <= sunsetTime;
  console.log({ isDaytime });

  return {
    isDaytime,
    weatherIcon: isDaytime
      ? require('../assets/day-icon.png')
      : require('../assets/night-icon.png'),
    gradientColors: isDaytime
      ? [MD2Colors.blue600, MD2Colors.cyan200]
      : [MD2Colors.blue900, MD2Colors.blue600],
  };
};

// Obtener temporada
export const getSeason = (lat: number, lon: number) => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1; // El mes va de 0 a 11

  if ((lat >= 0 && lat <= 23.5) || (lat >= -180 && lat <= -156.5)) {
    // Hemisferio Norte - verano
    if (month >= 6 && month <= 8) {
      return 'Verano';
    } else {
      return 'Invierno';
    }
  } else if (lat >= -23.5 && lat <= 0) {
    // Hemisferio Sur - verano
    if (month >= 12 || month <= 2) {
      return 'Verano';
    } else {
      return 'Invierno';
    }
  } else {
    // Hemisferio Norte - Invierno, Hemisferio Sur - Invierno
    if (month >= 3 && month <= 5) {
      return 'Primavera';
    } else if (month >= 6 && month <= 8) {
      return 'Verano';
    } else if (month >= 9 && month <= 11) {
      return 'Otoño';
    } else {
      return 'Invierno';
    }
  }
};
