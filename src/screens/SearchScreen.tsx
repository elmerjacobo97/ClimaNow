import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, ActivityIndicator, useTheme } from 'react-native-paper';
import { useWeatherSearch } from '../hooks';
import { WeatherDisplay } from '../components';

export const SearchScreen = () => {
  const { colors } = useTheme();
  const { isLoading, weatherData, city, setCity, handleSearch, error } =
    useWeatherSearch();
  const [showNoResults, setShowNoResults] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Buscar clima"
        placeholder="Escribe el nombre de la ciudad ..."
        mode="outlined"
        right={
          <TextInput.Icon
            icon="magnify"
            onPress={async () => {
              await handleSearch();
              setShowNoResults(true);
            }}
          />
        }
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleSearch}
        style={styles.input}
        theme={{
          colors: {
            primary: colors.primary,
          },
        }}
      />
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : error ? (
        <Text style={[styles.message, { color: colors.error }]}>
          Error en la solicitud: {error}
        </Text>
      ) : weatherData && Object.keys(weatherData).length > 0 ? (
        <WeatherDisplay weatherData={weatherData} />
      ) : (
        <Text style={styles.message}>
          {showNoResults
            ? 'No se encontró la ciudad solicitada.'
            : 'Ingresa el nombre de una ciudad para consultar el clima.'}
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
