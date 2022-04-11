import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  subContainer: {
    flex: 1,
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  icons: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  buttonText: {
    ...Font.body,
    fontSize: 14,
    color: COLORS.black,
    marginLeft: 10,
  },
});

export default styles;
