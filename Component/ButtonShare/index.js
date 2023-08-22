/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';

// CONSTANT
import color from '../../Constant/color';
import {responsiveHeight} from '../../Constant/responsive';

const index = ({totalShare}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.centerTxt}>
        <Text style={styles.txtShare}>{totalShare}</Text>
        <Text style={styles.txtShare}>Shares</Text>
      </View>
      <IconButton
        icon="whatsapp"
        iconColor={color.white}
        size={responsiveHeight(20)}
        onPress={() => console.log('Pressed')}
        style={{
          borderRadius: 50,
          backgroundColor: '#25D366',
          alignItems: 'center',
        }}
      />
      <IconButton
        icon="facebook"
        iconColor={color.white}
        size={responsiveHeight(20)}
        onPress={() => console.log('Pressed')}
        style={{
          borderRadius: 50,
          backgroundColor: '#4267B2',
          alignItems: 'center',
        }}
      />
      <IconButton
        icon="twitter"
        iconColor={color.white}
        size={responsiveHeight(20)}
        onPress={() => console.log('Pressed')}
        style={{
          borderRadius: 50,
          backgroundColor: '#1DA1F2',
          alignItems: 'center',
        }}
      />
      <IconButton
        icon="facebook-messenger"
        iconColor={color.white}
        size={responsiveHeight(20)}
        onPress={() => console.log('Pressed')}
        style={{
          borderRadius: 50,
          backgroundColor: '#006AFF',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerTxt: {
    alignItems: 'center',
  },
  txtShare: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(14),
    color: color.neutral_gray,
  },
});
