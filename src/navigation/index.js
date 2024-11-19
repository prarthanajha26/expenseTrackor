import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from '../screens/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenName from './screenName';
import Tutorial from '../screens/tutorial';
import BottomNav from './bottomNav';
import Step1 from '../screens/Step1';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screenName.splash}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenName.tutorial}
          component={Tutorial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenName.step1}
          component={Step1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenName.home}
          component={BottomNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
