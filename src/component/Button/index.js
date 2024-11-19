import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, vh} from '../../utils/dimesion';

const CustomeButton = ({touchableStyling, textstyling, onPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, touchableStyling]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textstyling]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#ffffff',
    paddingVertical: vh(15),
    borderRadius: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: normalize(30),
    color: '#251893',
  },
});
