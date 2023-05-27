import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useLocation, useWeatherData } from '../hooks';
import { Loading, WeatherInfo } from '../components';
import { getWeatherConfig } from '../helpers';

export const HomeScreen = () => {
  const { latitude, longitude, loading } = useLocation();
  const { data: weatherData, loading: weatherLoading } = useWeatherData(
    latitude,
    longitude,
  );
  const weatherConfig = getWeatherConfig(weatherData);

  if (loading || weatherLoading) {
    return <Loading />;
  }

  const temperature: number = Math.round(weatherData.main.temp);
  const description: string = weatherData.weather[0].description;

  return (
    <LinearGradient
      colors={weatherConfig.gradientColors}
      style={styles.container}>
      <View style={styles.weatherContainer}>
        <Image
          source={weatherConfig.weatherIcon}
          style={styles.weatherIcon}
          resizeMode="contain"
        />
        <Text style={styles.city}>{weatherData.name}</Text>
        <Text style={styles.temperature}>{temperature}°</Text>
        <Text style={styles.description}>{description}</Text>
        <WeatherInfo weatherData={weatherData} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherIcon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  city: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  description: {
    fontSize: 26,
    color: 'white',
    marginBottom: 20,
  },
});
