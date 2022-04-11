import {Dimensions} from 'react-native';

const COLORS = {
  black: `#000000`,
  white: 'white',
  graybackground: '#f2f2f2',
  skyblue: '#cceeff',
  gray: 'gray',
  gray1: '#bcbcbc',
  dodgerblue: '#1e90ff',
  lightslategrey: '#778899',
  blue: '#0000ff',
  blue2: '#0064C0',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',

  primary: '#FF6C44', //orange
  transparentPrimary: 'rgba(227, 120, 75, 0.4)',
  orange: '#FFA133',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#008000',
  darkgreen: '#004011',
  red: '#FF1717',
  red2: '#FF6C44',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray0: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  white2: '#FBFBFB',
  pink: '#FFC0CB',
  golden: '#FFD700',
};

const Font = {
  heading: {fontFamily: 'UberMoveBold'},
  body: {fontFamily: 'UberMoveMedium'},
};

const Size = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('window').height,
};

export {COLORS, Font, Size};
