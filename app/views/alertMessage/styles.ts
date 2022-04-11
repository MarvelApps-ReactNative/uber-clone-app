import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  marginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    color: COLORS.black,
    fontSize: 22,
    ...Font.heading,
    position: 'absolute',
    top: Size.height * 0.1,
  },
  buttonContainer: {
    backgroundColor: COLORS.black,
    paddingVertical: 12,
  },
  okText: {
    color: COLORS.white,
    textAlign: 'center',
  },
  animationStyle: {
    top: Size.height * 0.15,
    width: Size.width * 0.15,
    height: Size.height * 0.47,
    alignSelf: 'center',
  },
});

export default styles;
