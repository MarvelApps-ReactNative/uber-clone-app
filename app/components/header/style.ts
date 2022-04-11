import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.black,
    padding: 20,
  },
  H1: {
    fontSize: 34,
    color: COLORS.white,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
});

export default styles;
