import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import {
  request,
  PERMISSIONS,
  Permission,
  PermissionStatus,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

export const useLocation = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  useEffect(() => {
    const getLocation = async () => {
      try {
        let permission: Permission | undefined;

        if (Platform.OS === 'ios') {
          permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
        } else if (Platform.OS === 'android') {
          permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
        }

        if (!permission) {
          console.log('Permiso de ubicación no definido para esta plataforma');
          setLoading(false);
          return;
        }

        const status: PermissionStatus = await request(permission);

        if (status !== 'granted') {
          console.log('Permiso de ubicación denegado');
          setLoading(false);
          return;
        }

        Geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            console.log('Latitud:', latitude);
            console.log('Longitud:', longitude);
            setLatitude(latitude);
            setLongitude(longitude);
            setLoading(false);
          },
          error => {
            console.log(error.code, error.message);
            setLoading(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } catch (error) {
        console.log('Error al solicitar permiso de ubicación:', error);
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return { loading, latitude, longitude };
};
