import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  seperator: {
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
    borderColor: COLORS.lightGray1,
  },
});

export default Styles;
