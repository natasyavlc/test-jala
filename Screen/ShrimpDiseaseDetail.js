/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

// COMPONENT
import Header from '../Component/Header';
import ButtonFilled from '../Component/ButtonFilled';

// CONSTANT
import color from '../Constant/color';
import {responsiveHeight, responsiveWidth} from '../Constant/responsive';

const ShrimpDiseaseDetail = ({
  data = {
    category: ['Bintik Hitam', 'EHP/HPM', 'WFD', 'YHD'],
  },
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Info Penyakit'}
        // onBack={() => navigation.goBack()}
        withAction
        actionIcon={'share-variant-outline'}
        action={() => console.log('action pressed')}
      />
      <View style={styles.content}>
        <Searchbar
          placeholder="Cari Kata Kunci Penyakit"
          placeholderTextColor={color.neutral_gray}
          onChangeText={onChangeSearch}
          value={searchQuery}
          iconColor={color.neutral_gray}
          inputStyle={{
            backgroundColor: 'transparent',
            fontSize: responsiveHeight(12),
            marginTop: responsiveHeight(-10),
          }}
          style={{
            height: responsiveHeight(40),
            backgroundColor: color.white,
            borderWidth: 1,
            borderColor: color.light_gray,
            borderRadius: 4,
            marginBottom: responsiveHeight(16),
          }}
        />
        <ButtonFilled
          text="Lihat Semua Penyakit"
          onPress={() => console.log('see all disease')}
        />
        <Text style={styles.txtBlue}>Penyakit Paling dicari</Text>
        <View style={styles.rowContainer}>
          {data.category.length > 0
            ? data.category.map(item => {
                return (
                  <Pressable style={styles.btn}>
                    <Text style={styles.txtCat}>{item}</Text>
                  </Pressable>
                );
              })
            : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShrimpDiseaseDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.light_blue,
  },
  content: {
    padding: responsiveHeight(16),
  },
  txtBlue: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(14),
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    color: color.dark_blue,
    marginTop: responsiveHeight(24),
    marginBottom: responsiveHeight(12),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btn: {
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveWidth(8),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: color.dark_blue,
    width: 'auto',
    alignItems: 'center',
    marginRight: responsiveWidth(8),
  },
  txtCat: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(12),
    color: color.dark_blue,
    textAlign: 'center',
  },
});
