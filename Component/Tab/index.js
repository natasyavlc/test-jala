/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// CONSTANT
import {responsiveHeight} from '../../Constant/responsive';
import color from '../../Constant/color';

const index = ({
  category = ['Harga Udang', 'Kabar Udang', 'Penyakit'],
  valueTab = 0,
  onPressTab,
}) => {
  const [tabValue, setTabValue] = useState(valueTab);
  return (
    <View style={styles.container}>
      {category.map((item, id) => {
        return (
          <TouchableOpacity
            key={id}
            style={[
              styles.tab,
              {
                borderBottomColor:
                  tabValue === id ? color.primary_blue : color.light_gray_line,
              },
            ]}
            activeOpacity={valueTab}
            onPress={() => {
              setTabValue(id);
              onPressTab(id);
            }}>
            <Text
              style={[
                styles.txtTab,
                {
                  color:
                    tabValue === id ? color.primary_blue : color.neutral_gray,
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    height: responsiveHeight(36),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width / 3,
    height: responsiveHeight(36),
    borderBottomWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTab: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(14),
  },
});

export default index;
