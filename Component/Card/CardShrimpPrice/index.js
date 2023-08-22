/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Pressable, Platform} from 'react-native';

// COMPONENT
import Avatar from '../../Avatar';
import Badge from '../../Badge';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../../../Constant/responsive';
import color from '../../../Constant/color';

const index = ({
  onCardPress,
  data = {
    verify: 0,
    status: 'Supplier',
    name: 'Mina Udang',
    date: '16 Januari 2020',
    province: 'Nusa Tenggara Barat',
    region: 'Sumba',
    size: 100,
    price: '56.500',
  },
}) => {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.rowContainer,
          {justifyContent: 'space-between', marginBottom: responsiveHeight(8)},
        ]}>
        <Avatar status={data.status} name={data.name} />
        <Badge status={data.verify} />
      </View>
      <View style={[styles.rowContainer, {justifyContent: 'space-between'}]}>
        <View>
          <Text style={styles.txtBlue}>{data.date}</Text>
          <Text style={styles.txtProvince}>{data.province}</Text>
          <Text style={styles.txtRegion}>{data.region}</Text>
          <Text style={styles.txtBlue}>size {data.size}</Text>
          <Text style={styles.txtPrice}>IDR {data.price}</Text>
        </View>
        <Pressable style={styles.btnDetail} onPress={onCardPress}>
          <Text style={styles.txtDetail}>LIHAT DETAIL</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: responsiveHeight(12),
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.light_gray_line,
    borderRadius: 4,
    marginBottom: responsiveHeight(8),
    elevation: 2,
    shadowColor: color.text_gray,
    shadowOffset: {
      width: Platform.OS === 'ios' ? 0.4 : 0.5,
      height: Platform.OS === 'ios' ? 0.4 : 0.5,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.4,
    shadowRadius: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtBlue: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(12),
    color: color.semantic_blue,
    marginBottom: responsiveHeight(4),
  },
  txtProvince: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(12),
    color: color.text_gray,
    marginBottom: responsiveHeight(4),
  },
  txtRegion: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(18),
    color: color.text_gray,
    marginBottom: responsiveHeight(10),
  },
  txtPrice: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(22),
    color: color.text_gray,
    lineHeight: 22,
  },
  btnDetail: {
    alignSelf: 'flex-end',
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(8),
    backgroundColor: color.primary_blue,
    borderRadius: 4,
  },
  txtDetail: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(14),
    color: color.white,
    lineHeight: 20,
  },
});
