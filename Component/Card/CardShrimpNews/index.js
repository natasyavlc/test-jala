import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';

// CONSTANT
import color from '../../../Constant/color';
import {responsiveHeight, responsiveWidth} from '../../../Constant/responsive';

const index = ({
  data = {
    img: 'https://source.unsplash.com/1024x768/?people',
    title: 'Baruno: Alat Kualitas Air Pintar Handal dan Praktis',
    content:
      'Tahun 2019 telah berlalu, kini tahun 2020 telah memasuki minggu ketiga, memasuki tahun...',
    date: '30 April 2020',
  },
  goToDetail,
}) => {
  return (
    <Pressable style={styles.card} onPress={goToDetail}>
      <Image source={{uri: data.img}} style={styles.img} resizeMethod="auto" />
      <View style={styles.content}>
        <Text style={styles.txtTitle}>{data.title}</Text>
        <Text style={styles.txtContent}>{data.content}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.txtContent}>{data.date}</Text>
          <IconButton
            icon="share-variant-outline"
            iconColor={color.icon_gray}
            size={responsiveHeight(24)}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.light_gray_line,
  },
  img: {
    width: '100%',
    height: responsiveHeight(160),
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  content: {
    paddingVertical: responsiveHeight(8),
    paddingHorizontal: responsiveWidth(12),
  },
  txtTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: responsiveHeight(18),
    color: color.text_gray,
    marginBottom: responsiveHeight(4),
  },
  txtContent: {
    fontFamily: 'Lato-Regular',
    fontSize: responsiveHeight(14),
    color: color.neutral_gray,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: responsiveHeight(4),
  },
});
