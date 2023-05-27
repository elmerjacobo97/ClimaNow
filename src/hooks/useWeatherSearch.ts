import { useState } from 'react';
import { Alert } from 'react-native';
import { weatherApi } from '../api';
import { WeatherData } from '../interfaces';

export const useWeatherSearch = () => {
  const [city, setCity] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (city.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa el nombre de la ciudad');
      return;
    }

    try {
      setLoading(true);
      const { data } = await weatherApi.get(`/weather?q=${city}`);
      setWeatherData(data);
      setCity('');
      setError(null);
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError(
        'No se encontró ninguna ciudad o ocurrió un error en la solicitud.',
      );
    } finally {
      setLoading(false);
    }
  };

  return { city, setCity, handleSearch, weatherData, isLoading, error };
};
