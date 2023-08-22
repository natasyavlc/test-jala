import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// ICON
import YellowStar from '../../assets/image/yellow-star.png';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../../Constant/responsive';
import color from '../../Constant/color';

const index = ({status = 0}) => (
  <View>
    {status === 1 ? (
      <View style={[styles.rowContainer, styles.yellowBadge]}>
        <Image source={YellowStar} style={styles.icon} />
        <Text style={styles.txtBadge}>Terverifikasi</Text>
      </View>
    ) : (
      <View style={[styles.rowContainer, styles.grayBadge]}>
        <Text style={styles.txtBadge}>Belum Terverifikasi</Text>
      </View>
    )}
  </View>
);

export default index;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
    borderRadius: 20,
  },
  yellowBadge: {
    backgroundColor: color.light_yellow,
  },
  grayBadge: {
    backgroundColor: color.light_gray,
  },
  icon: {
    width: responsiveHeight(18),
    height: responsiveHeight(18),
    marginRight: responsiveWidth(4),
  },
  txtBadge: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(12),
    color: color.text_gray,
  },
});
