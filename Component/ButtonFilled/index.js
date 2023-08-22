import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../../Constant/responsive';
import color from '../../Constant/color';

const index = ({text = 'Press Me', onPress}) => {
  return (
    <Pressable style={styles.btnBlue} onPress={onPress}>
      <Text style={styles.txtBtn}>{text}</Text>
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  btnBlue: {
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(16),
    backgroundColor: color.primary_blue,
    borderRadius: 4,
  },
  txtBtn: {
    fontSize: responsiveHeight(14),
    fontFamily: 'Lato-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    color: color.white,
    textAlign: 'center',
  },
});
