import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// CONSTANT
import {responsiveHeight} from '../../Constant/responsive';
import color from '../../Constant/color';

const index = ({
  img = 'https://source.unsplash.com/1024x768/?people',
  status = 'Supplier',
  name = 'Mina Udang Barokah',
}) => {
  return (
    <View style={styles.rowContainer}>
      <Image source={{uri: img}} style={styles.img} resizeMethod="auto" />
      <View>
        <Text style={styles.txtStatus}>{status}</Text>
        <Text style={styles.txtName}>{name}</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  img: {
    width: responsiveHeight(32),
    height: responsiveHeight(32),
    borderRadius: responsiveHeight(18),
    marginRight: responsiveHeight(10),
  },
  txtStatus: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(12),
    color: color.neutral_gray,
  },
  txtName: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(14),
    color: color.text_gray,
  },
});
