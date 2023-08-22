import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// COMPONENT
import Header from '../Component/Header';
import ButtonShare from '../Component/ButtonShare';

// CONSTANT
import {responsiveHeight, responsiveWidth} from '../Constant/responsive';
import color from '../Constant/color';

const ShrimpNewsDetail = ({
  data = {
    title: 'Tambak Udang Berpotensi Mencemari Lingkungan',
    author: 'Wildan Gayuh Zulfikar',
    date: '30 January 2020',
    totalShare: '210',
    img: 'https://source.unsplash.com/1024x768/?shrimp',
    news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Kabar Udang'}
        // onBack={() => navigation.goBack()}
        withAction
        actionIcon={'share-variant-outline'}
        action={() => console.log('action pressed')}
      />
      <ScrollView style={styles.card}>
        <View>
          <Text style={styles.txtTitle}>{data.title}</Text>
          <Text style={styles.txtLight}>Jala | {data.author}</Text>
          <Text style={styles.txtLight}>{data.date}</Text>
        </View>
        <View style={styles.btnShare}>
          <ButtonShare totalShare={data.totalShare} />
        </View>
        <Image
          source={{uri: data.img}}
          resizeMethod="auto"
          style={styles.img}
        />
        <Text style={styles.txtNews}>{data.news}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShrimpNewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.light_gray,
  },
  card: {
    backgroundColor: color.white,
    margin: responsiveHeight(16),
    paddingVertical: responsiveHeight(24),
    paddingHorizontal: responsiveHeight(16),
    borderRadius: 12,
    elevation: 4,
    shadowColor: color.text_gray,
    shadowOffset: {
      width: Platform.OS === 'ios' ? 0.4 : 0.5,
      height: Platform.OS === 'ios' ? 0.4 : 0.5,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.4,
    shadowRadius: 1,
  },
  txtTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(20),
    fontWeight: Platform.OS === 'ios' ? '700' : null,
    color: color.text_gray,
    marginRight: responsiveWidth(16),
    marginBottom: responsiveHeight(16),
  },
  txtLight: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(12),
    color: color.neutral_gray,
    marginBottom: responsiveHeight(4),
  },
  btnShare: {
    alignSelf: 'flex-end',
  },
  img: {
    width: Dimensions.get('window').width - 28,
    height: Dimensions.get('window').width / 2,
    marginVertical: responsiveHeight(16),
    marginLeft: responsiveWidth(-16),
  },
  txtNews: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(14),
    color: color.neutral_gray,
    lineHeight: 22,
  },
});
