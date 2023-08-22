import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';

// COMPONENT
import Badge from '../../Badge';
import Avatar from '../../Avatar';
import Contact from '../../Contact';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../../../Constant/responsive';
import color from '../../../Constant/color';

// HELPER
import {rupiahFormatter} from '../../../helper';

const index = ({
  data = {
    date: '16 Januari 2020',
    verify: 1,
    name: 'Mina Udang Barokah',
    status: 'Supplier',
    listPrice: [
      {
        size: 20,
        price: 97000,
      },
      {
        size: 30,
        price: 83000,
      },
      {
        size: 40,
        price: 76000,
      },
    ],
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
  },
}) => (
  <ScrollView
    contentContainerStyle={{paddingBottom: responsiveHeight(36)}}
    style={styles.container}>
    <View style={styles.rowContainer}>
      <Text style={styles.txtDate}>{data.date}</Text>
      <Badge status={data.verify} />
    </View>
    <Avatar status={data.status} name={data.name} />
    <View style={{height: responsiveHeight(10)}} />
    <Contact />

    <Text style={styles.txtList}>Daftar Harga</Text>
    {data.listPrice.length > 0 ? (
      data.listPrice.map((item, id) => {
        return (
          <View style={styles.rowPrice} key={id}>
            <Text style={styles.txtSize}>Size {item.size}</Text>
            <Text style={styles.txtSize}>
              {rupiahFormatter.format(item.price)}
            </Text>
          </View>
        );
      })
    ) : (
      <Text style={[styles.txtSize, {color: color.neutral_gray}]}>
        Daftar Harga Tidak Tersedia
      </Text>
    )}
    <Text style={styles.txtNote}>Catatan</Text>
    <Text style={styles.txtNotes}>{data.notes}</Text>
  </ScrollView>
);

export default index;

const styles = StyleSheet.create({
  container: {
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(16),
    backgroundColor: color.white,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(8),
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: responsiveHeight(12),
  },
  txtDate: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(14),
    color: color.neutral_gray,
  },
  txtList: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(16),
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    color: color.text_gray,
    marginVertical: responsiveWidth(12),
  },
  txtSize: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(16),
    color: color.text_gray,
    marginRight: responsiveWidth(16),
  },
  txtNote: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(16),
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    color: color.text_gray,
    marginTop: responsiveWidth(12),
    marginBottom: responsiveHeight(8),
  },
  txtNotes: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(14),
    color: color.text_gray,
    marginRight: responsiveWidth(16),
    lineHeight: responsiveHeight(20),
  },
});
