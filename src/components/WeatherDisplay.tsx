import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { WeatherData } from '../interfaces';
import { getSeason } from '../helpers';

interface Props {
  weatherData: WeatherData;
}

export const WeatherDisplay = ({ weatherData }: Props) => {
  const season = getSeason(weatherData.coord.lat, weatherData.coord.lon);

  return (
    <View style={styles.weatherContainer}>
      <Title style={styles.weatherCity}>
        {weatherData.name} {''}
        <Text style={{ fontSize: 12, color: '#2196F3', fontWeight: 'bold' }}>
          {weatherData.sys.country}
        </Text>
      </Title>
      <Text style={styles.weatherTemperature}>
        {Math.round(weatherData.main.temp)}°
      </Text>
      <Text style={styles.weatherDescription}>
        {weatherData.weather[0].description}
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Estación</Text>
          <Text style={styles.infoValue}>{season}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Humedad</Text>
          <Text style={styles.infoValue}>{weatherData.main.humidity}%</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Velocidad del viento</Text>
          <Text style={styles.infoValue}>{weatherData.wind.speed} m/s</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Temp. Mínima</Text>
          <Text style={styles.infoValue}>
            {Math.round(weatherData.main.temp_min)}°
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Temp. Máxima</Text>
          <Text style={styles.infoValue}>
            {Math.round(weatherData.main.temp_max)}°
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 30,
    borderRadius: 10,
    elevation: 2,
  },
  weatherCity: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333333',
  },
  season: {
    fontSize: 18,
    fontWeight: '100',
    marginBottom: 10,
    textAlign: 'center',
  },
  weatherTemperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196F3',
  },
  weatherDescription: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666666',
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  infoItem: {
    width: '50%',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});
