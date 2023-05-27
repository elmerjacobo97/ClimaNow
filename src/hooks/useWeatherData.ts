import { useEffect, useState } from 'react';
import { WeatherData } from '../interfaces';
import { weatherApi } from '../api';

export const useWeatherData = (latitude: number, longitude: number) => {
  const [data, setData] = useState<WeatherData>({} as WeatherData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeatherData = async () => {
      if (latitude !== 0 && longitude !== 0) {
        try {
          const { data } = await weatherApi.get<WeatherData>(
            `/weather/?lat=${latitude}&lon=${longitude}`,
          );
          setData(data);
          setLoading(false);
          console.log({ data });
        } catch (error) {
          console.log('Error al obtener los datos climáticos:', error);
          setLoading(false);
        }
      }
    };

    getWeatherData();
  }, [latitude, longitude]);

  return { loading, data };
};
