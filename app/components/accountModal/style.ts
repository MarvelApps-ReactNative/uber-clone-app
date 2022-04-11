import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  titleText: {
    ...Font.heading,
    fontSize: 16,
    color: COLORS.gray1,
    marginTop: 60,
    marginVertical: 20,
  },
  backButton: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: COLORS.black,
    padding: 10,
    marginTop: 30,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  saveText: {
    fontSize: 16,
    color: COLORS.white,
    ...Font.body,
    textAlign: 'center',
  },
  modalcontainer: {
    flex: 1,
  },
  submodalcontainer: {
    flex: 1,
    backgroundColor: COLORS.graybackground,
    padding: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    fontSize: 18,
    flex: 1,
    color:COLORS.black
  },
  textInputNumber: {
    borderWidth: 2,
    fontSize: 18,
    flex: 1,
    padding: 8,
    color: COLORS.black,
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  flagImage: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  countryCodeText: {
    fontSize: 18,
    marginEnd: 8,
    color: COLORS.black,
  },
});

export default styles;
