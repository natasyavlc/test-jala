import React from 'react';
import {Linking, Platform, StyleSheet, Text, View} from 'react-native';

// COMPONENT
import ButtonFilled from '../ButtonFilled';

// CONSTANT
import {responsiveHeight} from '../../Constant/responsive';
import color from '../../Constant/color';
import {maskPhoneNumber} from '../../helper';

const index = ({phoneNumber = '6281234086633'}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtContact}>Kontak</Text>
        <Text style={styles.txtNumber}>+{maskPhoneNumber(phoneNumber)}</Text>
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <ButtonFilled
          text="Hubungi"
          onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtContact: {
    fontSize: responsiveHeight(12),
    fontFamily: 'Lato-Regular',
    color: color.neutral_gray,
  },
  txtNumber: {
    fontSize: responsiveHeight(16),
    fontFamily: 'Lato-Bold',
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    color: color.text_gray,
    lineHeight: 24,
  },
});
