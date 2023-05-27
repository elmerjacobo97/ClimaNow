import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { MD2Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type CustomDrawerContentProps = DrawerContentComponentProps;

export const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.drawerHeader}>
        <Image
          source={require('../assets/weather-icon.png')}
          style={styles.drawerIcon}
        />
        <Text style={[styles.drawerTitle, { color: MD2Colors.white }]}>
          WeatherNow
        </Text>
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          label="Home"
          labelStyle={styles.drawerItemLabel}
          onPress={() => navigateToScreen('Home')}
          icon={({ color, size }) => (
            <Icon name="home" color={MD2Colors.white} size={size} />
          )}
          style={styles.drawerItem}
        />
        <DrawerItem
          label="Buscar"
          labelStyle={styles.drawerItemLabel}
          onPress={() => navigateToScreen('Search')}
          icon={({ color, size }) => (
            <Icon name="magnify" color={MD2Colors.white} size={size} />
          )}
          style={styles.drawerItem}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MD2Colors.blue600,
  },
  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: MD2Colors.blue400,
  },
  drawerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 16,
  },
  drawerTitle: {
    fontSize: 26,
    fontWeight: '900',
  },
  drawerItem: {
    paddingVertical: 10,
  },
  drawerItemLabel: {
    fontSize: 18,
    color: MD2Colors.white,
  },
});
