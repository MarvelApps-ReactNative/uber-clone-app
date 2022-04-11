import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  mobileTitleText: {
    fontSize: 20,
    color: COLORS.black,
    ...Font.body,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputTextStyle: {
    backgroundColor: COLORS.lightGray2,
    width: '78%',
    height: 46,
    paddingLeft: 12,
  },
  iconContainer: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightGray2,
  },
  icon: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  smallIcon: {
    height: 10,
    width: 10,
  },
  button: {
    backgroundColor: COLORS.black,
    padding: 15,
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: 'row',
  },
  textFlex: {
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    ...Font.body,
  },
  nextIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  socialButton: {
    backgroundColor: COLORS.white,
    padding: 14,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    flexDirection: 'row',
  },
  socialIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  socialButtonText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
    ...Font.heading,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: '27.3%',
  },
  orText: {
    marginHorizontal: 8,
    color: COLORS.black,
  },
});

export default styles;
