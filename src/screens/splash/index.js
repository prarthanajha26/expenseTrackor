import {Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../assets';
import screenName from '../../navigation/screenName';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      const IncomeData = await AsyncStorage.getItem('IncomeData');
      if (IncomeData) {
        navigation.navigate(screenName.home);
      } else {
        navigation.navigate(screenName.tutorial);
      }
    }, 2000);
  }, []);

  return <Image source={image.splash} />;
};

export default Splash;

const styles = StyleSheet.create({});
