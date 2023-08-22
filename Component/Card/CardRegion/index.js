import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// CONSTANT
import color from '../../../Constant/color';
import {responsiveHeight} from '../../../Constant/responsive';

const index = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtProvince}>{data.province}</Text>
      <Text style={styles.txtRegion}>{data.region}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: responsiveHeight(12),
    marginBottom: responsiveHeight(8),
  },
  txtProvince: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(16),
    color: color.text_gray,
    lineHeight: 24,
  },
  txtRegion: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(16),
    color: color.neutral_gray,
    lineHeight: 24,
  },
});

export default index;
