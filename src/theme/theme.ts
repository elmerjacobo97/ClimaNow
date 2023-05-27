import { DefaultTheme, MD2Colors } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: MD2Colors.blue600, // Color primario - Azul claro
    background: '#F5F5F5', // Color de fondo - Gris claro
    surface: '#FFFFFF', // Color de superficie - Blanco
    text: '#333333', // Color de texto - Negro
    accent: '#FFEB3B', // Color de acento - Amarillo
    error: '#FF0000', // Color de error - Rojo
    // Otros colores relacionados con la aplicación de clima
    weatherSunny: '#FFD700', // Color para clima soleado
    weatherCloudy: '#808080', // Color para clima nublado
    weatherRainy: '#6495ED', // Color para clima lluvioso
    // ...
  },
};
