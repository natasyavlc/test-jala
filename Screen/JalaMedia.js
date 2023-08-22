/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// COMPONENT
import Header from '../Component/Header';
import Tab from '../Component/Tab';
import CardShrimpPrice from '../Component/Card/CardShrimpPrice';
import CardShrimpNews from '../Component/Card/CardShrimpNews';

// FETCH
import fetchAPI from '../Api/api';

// CONSTANT
import {responsiveHeight} from '../Constant/responsive';
import color from '../Constant/color';

const JalaMedia = ({navigation}) => {
  const [tabValue, setTabValue] = useState(0);

  const getListPrice = () => {
    fetchAPI
      .get(
        'https://app.jala.tech/api/shrimp_prices?per_page=15&page=1&with=region,creator&region_id=',
      )
      .then(res => {
        console.log(res, 'res list price');
      })
      .catch(err => {
        console.log(err, 'err list price');
      });
  };

  useEffect(() => {
    getListPrice();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title={'Jala Media'}
        onBack={() => {
          console.log('on back press');
        }}
      />
      <Tab valueTab={tabValue} onPressTab={val => setTabValue(val)} />

      <View style={styles.content}>
        {tabValue === 0 ? (
          <>
            <Text style={styles.textTitle}>Harga Terbaru</Text>
            <CardShrimpPrice
              onCardPress={() => {
                console.log('lihat');
                navigation.navigate('ShrimpPriceDetail');
              }}
            />
          </>
        ) : tabValue === 1 ? (
          <>
            <Text style={[styles.textTitle, {textAlign: 'left'}]}>
              Kabar Terbaru
            </Text>
            <CardShrimpNews
              goToDetail={() => navigation.navigate('ShrimpNewsDetail')}
            />
          </>
        ) : tabValue === 2 ? (
          <>
            <Text style={[styles.textTitle, {textAlign: 'left'}]}>
              Daftar Penyakit
            </Text>
            <CardShrimpNews
              goToDetail={() => navigation.navigate('ShrimpDiseaseDetail')}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};

export default JalaMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(18),
    color: color.blue,
    marginTop: responsiveHeight(14),
    marginBottom: responsiveHeight(8),
    textAlign: 'center',
  },
  content: {
    marginHorizontal: responsiveHeight(16),
  },
});
