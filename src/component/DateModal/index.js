import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Modal from 'react-native-modal';
import {normalize} from '../../utils/dimesion';

const DateModal = ({isVisible, onBackdropPress, date, handleDate}) => {
  //   const [date, setDate] = useState(dayjs());
  //   const handleSetDate = params => {
  //     // console.log('+++', params);
  //     setDate(params?.date);
  //   };
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <DateTimePicker
          mode="single"
          date={date}
          onChange={params => handleDate(params?.date)}
        />
      </View>
    </Modal>
  );
};

export default DateModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: normalize(20),
    padding: normalize(10),
  },
});
