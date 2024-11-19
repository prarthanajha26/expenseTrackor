import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {normalize, vh} from '../../utils/dimesion';

const CustomeModal = ({isVisible, onBackdropPress, selectCategory}) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View
        style={{
          backgroundColor: 'white',
          padding: normalize(20),
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={styles.categroryStyle}
          onPress={() => selectCategory('Food')}>
          <Text style={styles.textstyle}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categroryStyle}
          onPress={() => selectCategory('Transport')}>
          <Text style={styles.textstyle}>Transport</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categroryStyle}
          onPress={() => selectCategory('Shopping')}>
          <Text style={styles.textstyle}>Shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categroryStyle}
          onPress={() => selectCategory('Education')}>
          <Text style={styles.textstyle}>Education</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomeModal;

const styles = StyleSheet.create({
  categroryStyle: {
    padding: normalize(15),
    borderWidth: 1,
    borderColor: '#c9ccd1',
    borderRadius: normalize(10),
    marginTop: normalize(10),
  },
  textstyle: {
    fontSize: normalize(17),
    fontWeight: '600',
  },
});
