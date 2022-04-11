import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 0.1,
    backgroundColor: COLORS.black,
    padding: 20,
  },
  modalMessageText: {
    fontSize: 27,
    color: COLORS.black,
    ...Font.body,
  },
  staySignedText: {
    fontSize: 17,
    color: COLORS.transparentBlack7,
    ...Font.body,
    marginVertical: 5,
  },
  nameText: {
    fontSize: 16,
    color: COLORS.black,
    ...Font.body,
  },
  paragraphText: {
    fontSize: 14,
    color: COLORS.gray,
    ...Font.body,
    marginVertical: 5,
  },
  icon: {
    height: 30,
    width: 30,
    padding: 32,
    borderRadius: 90,
  },
  smallIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  secondContainer: {
    flex: 1,
  },
  subConatiner: {
    flex: 1,
    padding: 16,
  },
  favouriteText: {
    fontSize: 16,
    color: COLORS.transparentBlack7,
    ...Font.body,
  },
  signOutContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 20,
  },
  userContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  userTextConatiner: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 14,
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.black,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.white,
    textAlign: 'center',
    ...Font.heading,
  },
  cancelContainer: {
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  cancelText: {
    fontSize: 18,
    color: COLORS.black,
    textAlign: 'center',
    ...Font.heading,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.transparentBlack7,
  },
  subModalContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
  },
  seperator: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: COLORS.graybackground,
  },
});

export default styles;
