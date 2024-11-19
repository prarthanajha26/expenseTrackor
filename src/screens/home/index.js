import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize, SCREEN_WIDTH} from '../../utils/dimesion';
import CustomeButton from '../../component/Button';
import CustomeModal from '../../component/categoryModal';
import screenName from '../../navigation/screenName';

const Home = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [data, setData] = useState({});
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    fetchIncomeData();
    fetchExpenseDate();
  }, [expense]);

  const fetchIncomeData = async () => {
    const response = await AsyncStorage.getItem('IncomeData');
    const IncomeData = JSON.parse(response);
    setData(IncomeData);
  };
  const fetchExpenseDate = async () => {
    const response = await AsyncStorage.getItem('ExpenseData');
    const res = JSON.parse(response);
    // console.log(res, 'resres');

    setExpense(res);
  };
  const handleEdit = index => {
    const editExpense = expense.find(expense => expense.id === index);
    navigation.navigate(screenName.transaction);
  };
  const handleDelete = async index => {
    console.log(index, 'index');

    const expeseData = expense.splice(1, index);
    // console.log(expeseData, 'expeseDataexpeseData');

    // const ExpeseData = [expeseData];
    await AsyncStorage.setItem('ExpenseData', JSON.stringify(expeseData));
  };
  return (
    <>
      <View style={[{paddingTop: insets.top + 10}, styles.upperContainer]}>
        <Text style={[styles.appTitle]}>ExpenseX.</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.wallet}>Wallet</Text>
        <View style={styles.cardContainer}>
          <View style={styles.balance}>
            <Text style={styles.textHeading}>Available Balance</Text>
            <Text style={styles.valueStyle}>Rs.{data.totalBalance}</Text>
          </View>
          <View style={styles.earnSpentView}>
            <View>
              <Text style={styles.textHeading}>Earned</Text>
              <Text style={styles.valueStyle}>Rs.{data.IncomePerMonth}</Text>
            </View>
            <View>
              <Text style={[styles.textHeading]}>Spent</Text>
              <Text style={styles.valueStyle}>Rs. 12</Text>
            </View>
          </View>
        </View>
        <View style={styles.RecentExpense}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: normalize(20),
              marginBottom: normalize(10),
              justifyContent: 'space-between',
            }}>
            <Text style={styles.wallet}>Recent Expense</Text>
            <TouchableOpacity style={styles.addButton} activeOpacity={0.6}>
              <Text style={styles.addExpense}>Add Expense</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.transaction}>
            {expense?.map((item, index) => (
              <View
                style={{
                  width: SCREEN_WIDTH - 70,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderBottomColor: 'white',
                  padding: normalize(20),
                  borderRadius: normalize(20),
                  marginBottom: normalize(20),
                }}>
                <Text style={{color: 'white'}}>{item.category}</Text>
                <Text style={{color: 'white'}}>{item.amount}</Text>
                <Text
                  style={{color: 'white'}}
                  onPress={() => handleEdit(item.id)}>
                  Edit
                </Text>
                <Text
                  style={{color: 'white'}}
                  onPress={() => handleDelete(index)}>
                  Delete
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <CustomeModal />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  appTitle: {fontSize: normalize(32), color: 'white', paddingHorizontal: 20},
  upperContainer: {
    backgroundColor: '#5E5FDF',
    paddingBottom: normalize(20),
    borderBottomEndRadius: normalize(20),
    borderBottomStartRadius: normalize(20),
    alignItems: 'center',
  },
  textHeading: {
    color: 'white',
    fontSize: normalize(20),
    fontWeight: '500',
  },
  valueStyle: {
    color: 'white',
    fontSize: normalize(17),
    fontWeight: '400',
  },
  earnSpentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(10),
    paddingVertical: normalize(10),
  },
  cardContainer: {
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#5E5FDF',
    padding: normalize(20),
    borderRadius: normalize(20),
  },
  wallet: {
    fontSize: normalize(20),

    // color: 'white',
  },
  container: {paddingHorizontal: normalize(20), marginTop: normalize(20)},
  balance: {
    paddingVertical: normalize(10),
    borderBottomWidth: 0.3,
    borderBottomColor: 'white',
  },
  RecentExpense: {
    marginVertical: normalize(20),
    // paddingHorizontal: normalize(10),
    // borderRadius: normalize(20),
  },
  transaction: {
    backgroundColor: '#5E5FDF',
    paddingHorizontal: normalize(10),
    borderRadius: normalize(20),
  },
  addExpense: {
    fontSize: normalize(15),
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
