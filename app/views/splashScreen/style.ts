import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uberText: {
    fontSize: 50,
    color: COLORS.black,
    ...Font.body,
  },
});

export default styles;
