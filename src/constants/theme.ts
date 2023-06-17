import { Dimensions, Platform } from 'react-native';
import {
  ICommonTheme,
  ThemeAssets,
  ThemeFonts,
  ThemeIcons,
  ThemeLineHeights,
  ThemeWeights,
} from './types';

const { width, height } = Dimensions.get('window');

// Naming source: https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const WEIGHTS: ThemeWeights = {
  text: 'normal',
  h1: Platform.OS === 'ios' ? '700' : 'normal',
  h2: Platform.OS === 'ios' ? '700' : 'normal',
  h3: Platform.OS === 'ios' ? '700' : 'normal',
  h4: Platform.OS === 'ios' ? '700' : 'normal',
  h5: Platform.OS === 'ios' ? '600' : 'normal',
  p: 'normal',

  thin: Platform.OS === 'ios' ? '100' : 'normal',
  extralight: Platform.OS === 'ios' ? '200' : 'normal',
  light: Platform.OS === 'ios' ? '300' : 'normal',
  normal: Platform.OS === 'ios' ? '400' : 'normal',
  medium: Platform.OS === 'ios' ? '500' : 'normal',
  semibold: Platform.OS === 'ios' ? '600' : 'normal',
  bold: Platform.OS === 'ios' ? '700' : 'normal',
  extrabold: Platform.OS === 'ios' ? '800' : 'normal',
  black: Platform.OS === 'ios' ? '900' : 'normal',
};

export const ICONS: ThemeIcons = {};

export const ASSETS: ThemeAssets = {
  PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
  PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
  PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
  PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
};

export const FONTS: ThemeFonts = {
  // based on font size
  text: 'Poppins-Regular',
  h1: 'Poppins-Bold',
  h2: 'Poppins-Bold',
  h3: 'Poppins-Bold',
  h4: 'Poppins-Bold',
  h5: 'Poppins-SemiBold',
  p: 'Poppins-Regular',

  // based on fontWeight
  thin: 'Poppins-Thin',
  extralight: 'Poppins-Light',
  light: 'Poppins-Light',
  normal: 'Poppins-Regular',
  medium: 'Poppins-SemiBold',
  semibold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
  extrabold: 'Poppins-ExtraBold',
  black: 'Poppins-ExtraBold',
};

export const LINE_HEIGHTS: ThemeLineHeights = {
  // font lineHeight
  text: 22,
  h1: 60,
  h2: 55,
  h3: 43,
  h4: 33,
  h5: 24,
  p: 22,
};

export const THEME: ICommonTheme = {
  icons: ICONS,
  assets: { ...ICONS, ...ASSETS },
  fonts: FONTS,
  weights: WEIGHTS,
  lines: LINE_HEIGHTS,
  sizes: { width, height },
};
