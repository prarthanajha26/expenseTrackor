import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../assets';
import {normalize, vh, vw} from '../../utils/dimesion';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomeButton from '../../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import screenName from '../../navigation/screenName';

const Step1 = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [error, setError] = useState();
  const [incomeData, setIncomeData] = useState({
    name: '',
    totalBalance: '',
    IncomePerMonth: '',
  });

  const handleIncomeData = (key, value) => {
    setIncomeData({...incomeData, [key]: value});
  };

  const handelSetData = async () => {
    if (
      !incomeData.name &&
      !incomeData.IncomePerMonth &&
      !incomeData.totalBalance
    ) {
      setError('all fields are required');
    } else {
      const IncomeData = JSON.stringify(incomeData);
      await AsyncStorage.setItem('IncomeData', IncomeData);
      navigation.navigate(screenName.home);
    }
  };

  return (
    <ImageBackground
      source={image.background2}
      resizeMode="cover"
      style={styles.ImageBackground}>
      <Text style={[styles.appTitle, {paddingTop: insets.top + 10}]}>
        ExpenseX.
      </Text>
      <View style={styles.container}>
        <Text style={styles.stepAway}>Your are just one step away</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Name"
            style={styles.inputFiled}
            placeholderTextColor={'white'}
            value={incomeData.name}
            onChangeText={value => handleIncomeData('name', value)}
          />
          <TextInput
            placeholder="Total Balance"
            style={styles.inputFiled}
            placeholderTextColor={'white'}
            value={incomeData.totalBalance}
            onChangeText={value => handleIncomeData('totalBalance', value)}
          />
          <TextInput
            placeholder="Income per month"
            style={styles.inputFiled}
            placeholderTextColor={'white'}
            value={incomeData.IncomePerMonth}
            onChangeText={value => handleIncomeData('IncomePerMonth', value)}
          />
        </View>
        <View style={styles.buttonView}>
          <CustomeButton
            title={'Next'}
            touchableStyling={styles.buttonContainer}
            onPress={handelSetData}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Step1;

const styles = StyleSheet.create({
  ImageBackground: {flex: 1},
  appTitle: {fontSize: normalize(32), color: 'white', paddingHorizontal: 20},
  inputFiled: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    marginVertical: vh(20),
    color: 'white',
  },
  stepAway: {
    color: 'white',
    fontSize: 16,
    paddingBottom: normalize(20),
  },
  buttonContainer: {
    width: vw(150),
    borderRadius: normalize(100),
  },
  buttonView: {
    alignItems: 'flex-end',
    paddingTop: normalize(20),
  },
  container: {
    justifyContent: 'center',
    flex: 0.8,
    paddingHorizontal: vw(20),
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(20),
    borderRadius: normalize(30),
  },
});
