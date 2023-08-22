import {Dimensions} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const widthFigma = 360;
const heightFigma = 720;

export const responsiveWidth = width => {
  return (windowWidth * width) / widthFigma;
};

export const responsiveHeight = height => {
  return (windowHeight * height) / heightFigma;
};
