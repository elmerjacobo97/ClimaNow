import { View, Text, StyleSheet } from 'react-native';
import { WeatherData } from '../interfaces';
import { formatTime } from '../helpers';
import { Surface } from 'react-native-paper';

interface Props {
  weatherData: WeatherData;
}

export const WeatherInfo = ({ weatherData }: Props) => {
  const humidity: number = weatherData.main.humidity;
  const windSpeed: number = weatherData.wind.speed;
  const feelsLike: number = Math.round(weatherData.main.feels_like);
  const pressure: number = weatherData.main.pressure;
  const sunrise: string = formatTime(weatherData.sys.sunrise);
  const sunset: string = formatTime(weatherData.sys.sunset);
  const minTemp: number = Math.round(weatherData.main.temp_min);
  const maxTemp: number = Math.round(weatherData.main.temp_max);

  return (
    <Surface style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Sensación</Text>
          <Text style={styles.infoValue}>{feelsLike}°</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Humedad</Text>
          <Text style={styles.infoValue}>{humidity}%</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Viento</Text>
          <Text style={styles.infoValue}>{windSpeed} m/s</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Presión</Text>
          <Text style={styles.infoValue}>{pressure} hPa</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Amanecer</Text>
          <Text style={styles.infoValue}>{sunrise}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Atardecer</Text>
          <Text style={styles.infoValue}>{sunset}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Temp. Mínima</Text>
          <Text style={styles.infoValue}>{minTemp}°</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Temp. Máxima</Text>
          <Text style={styles.infoValue}>{maxTemp}°</Text>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    elevation: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoItem: {
    width: '48%',
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
