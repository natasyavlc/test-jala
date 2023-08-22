import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

// COMPONENT
import Header from '../Component/Header';
import CardRegion from '../Component/Card/CardRegion';
import CardShrimpPriceDetail from '../Component/Card/CardShrimpPriceDetail';

// CONSTANT
import color from '../Constant/color';

const ShrimpPriceDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Harga Udang'}
        // onBack={() => navigation.goBack()}
        withAction
        actionIcon={'share-variant-outline'}
        action={() => console.log('action pressed')}
      />
      <CardRegion
        data={{
          province: 'Nusa Tenggara Barat',
          region: 'Sumba',
        }}
      />
      <CardShrimpPriceDetail />
    </SafeAreaView>
  );
};

export default ShrimpPriceDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.light_gray_line,
  },
});
