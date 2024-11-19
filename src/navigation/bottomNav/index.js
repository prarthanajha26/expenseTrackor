import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import screenName from '../screenName';
import Transaction from '../../screens/transaction';
import Detail from '../../screens/detail';
import Summary from '../../screens/summary';

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screenName.home}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screenName.transaction}
        component={Transaction}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={screenName.detail}
        component={Detail}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
