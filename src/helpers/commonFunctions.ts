import {Dimensions} from 'react-native';

export const designResolution = {
  width: 375,
  height: 650,
};
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export function perfectWidth(pixel: number) {
  return screenWidth / (designResolution.width / pixel);
}

export function perfectHeight(pixel: number) {
  return screenHeight / (designResolution.height / pixel);
}
