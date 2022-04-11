import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  secondContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  icons: {
    height: 20,
    width: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.graybackground,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumberInput: {
    width: '85%',
  },
  numberText: {
    ...Font.body,
    fontSize: 13,
    color: COLORS.black,
    marginVertical: 5,
  },
  inputBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  cardInput: {
    width: '80%',
  },
  input: {
    width: '40%',
  },
});

export default styles;
