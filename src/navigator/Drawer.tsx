import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, SearchScreen } from '../screens';
import { MD2Colors } from 'react-native-paper';
import { CustomDrawerContent, CustomDrawerContentProps } from './';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: CustomDrawerContentProps) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: MD2Colors.blue900,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: '900',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'ClimaNow' }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Buscar Clima' }}
      />
    </Drawer.Navigator>
  );
};
