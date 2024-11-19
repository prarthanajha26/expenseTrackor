import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, vh} from '../../utils/dimesion';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {image} from '../../assets';
import CustomeButton from '../../component/Button';
import CustomeModal from '../../component/categoryModal';
import dayjs from 'dayjs';
import DateModal from '../../component/DateModal';
import screenName from '../../navigation/screenName';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Transaction = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [error, setError] = useState();
  const [date, setDate] = useState(dayjs());
  const [expeseData, setExpenseData] = useState({
    amount: 0,
    name: '',
    category: '',
    transactionData: dayjs(),
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);

  // console.log('expeseDataexpeseData', expeseData);

  const toggleModal = () => {
    // console.log('modal');
    setModalVisible(!isModalVisible);
  };

  const toggleDateModal = () => {
    // console.log('{{{{');

    setIsDateModalVisible(!isDateModalVisible);
  };

  const handleExpenseData = async (key, value) => {
    // console.log('dataaa', key, value);

    setExpenseData({...expeseData, [key]: value});
  };
  const handelexpenseData = async () => {
    // console.log(expeseData, 'expeseDataexpeseData');

    if (
      !expeseData.category &&
      !expeseData.name &&
      !expeseData.amount &&
      !expeseData.transactionData
    ) {
      setError('all fields are required');
    } else {
      const response = await AsyncStorage.getItem('ExpenseData', ExpeseData);
      const expense = JSON.parse(response);
      let ExpeseData = [];
      // console.log(expense, '||||');
      if (expense !== null) {
        // console.log('++');

        ExpeseData = [...expense, {...expeseData, id: Math.random()}];
      } else {
        ExpeseData = [expeseData];
      }
      // console.log(ExpeseData, '+++');
      await AsyncStorage.setItem('ExpenseData', JSON.stringify(ExpeseData));
      navigation.navigate(screenName.home);
    }
  };

  const handleDate = date => {
    handleExpenseData('transactionData', date);
    setIsDateModalVisible(!isDateModalVisible);
  };
  // console.log('data', expeseData);

  const selectCategory = category => {
    handleExpenseData('category', category);
    setModalVisible(false);
  };
  return (
    <>
      <View
        style={{
          paddingTop: insets.top,
          flex: 1,
          paddingHorizontal: normalize(20),
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: normalize(32),
            color: '#332aa5',
          }}>
          Add Expense
        </Text>
        <TextInput
          placeholder="Amount"
          style={styles.inputFiled}
          placeholderTextColor={'#332aa54D'}
          value={expeseData.amount}
          onChangeText={value => handleExpenseData('amount', value)}
        />
        <TextInput
          placeholder="Name"
          style={styles.inputFiled}
          placeholderTextColor={'#332aa54D'}
          value={expeseData.name}
          onChangeText={value => handleExpenseData('name', value)}
        />
        <TouchableOpacity onPress={toggleModal}>
          <View pointerEvents="none">
            <TextInput
              placeholder="Category"
              style={styles.inputFiled}
              placeholderTextColor={'#332aa54D'}
              value={expeseData.category}
              editable={false}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleDateModal}>
          <View
            placeholder="Transaction Date"
            style={styles.inputFiled}
            placeholderTextColor={'#332aa54D'}
            value={JSON.stringify(expeseData.transactionData)}
            onChangeText={value => handleExpenseData('transactionDate', value)}
            editable={false}>
            {expeseData.transactionData ? (
              <Text>{JSON.stringify(expeseData.transactionData)}</Text>
            ) : (
              <Text>Transaction date</Text>
            )}
          </View>
        </TouchableOpacity>
        <CustomeButton
          touchableStyling={styles.submitButton}
          title={'Submit'}
          textstyling={styles.textstyling}
          onPress={handelexpenseData}
        />
      </View>
      <CustomeModal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        selectCategory={selectCategory}
      />
      <DateModal
        isVisible={isDateModalVisible}
        onBackdropPress={toggleDateModal}
        date={expeseData.transactionData}
        handleDate={handleDate}
      />
    </>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  inputFiled: {
    marginVertical: vh(20),
    color: 'black',
    backgroundColor: '#332aa533',
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(20),
  },
  submitButton: {
    backgroundColor: '#332aa5',
  },
  textstyling: {
    color: 'white',
    fontSize: normalize(20),
  },
});
