import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
  },
  emptyView: {
    flex: 0.7,
  },
  mainView: {
    flex: 0.5,
    backgroundColor: COLORS.white,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.graybackground,
  },
  titleText: {
    color: COLORS.black,
    fontSize: 25,
    ...Font.body,
  },
  calenderTimeText: {
    color: COLORS.black,
    fontSize: 20,
    ...Font.body,
  },
  setPickupTimeButton: {
    width: '90%',
    height: '60%',
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setTimeText: {
    color: COLORS.white,
    fontSize: 18,
    ...Font.body,
  },
});

export default styles;
