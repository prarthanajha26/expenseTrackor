import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {image} from '../../assets';
import CustomeButton from '../../component/Button';
import {vh, vw} from '../../utils/dimesion';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import screenName from '../../navigation/screenName';

const Tutorial = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const handleNavigation = () => {
    navigation.navigate(screenName.step1);
  };
  return (
    <ImageBackground
      source={image.background}
      resizeMode="cover"
      style={styles.bgcImage}>
      <View
        style={[styles.tutorialContainer, {paddingBottom: insets.bottom + 20}]}>
        <Text style={styles.welcomeText}>Welcome to Expense Tracker</Text>
        <Text style={styles.subText}>Best Way to Track your Expense</Text>
        <CustomeButton
          touchableStyling={styles.button}
          onPress={handleNavigation}
          title={'Get Started'}
        />
      </View>
    </ImageBackground>
  );
};

export default Tutorial;
