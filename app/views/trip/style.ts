import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    borderWidth: 1,
  },
  retryText: {
    color: COLORS.black,
    fontSize: 16,
  },
  text: {
    fontSize: 22,
    marginVertical: 10,
    color: COLORS.black,
    ...Font.body,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.white,
    ...Font.heading,
  },
  topButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: COLORS.darkGray,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 22,
    width: 22,
    tintColor: COLORS.white,
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 1,
  },
});

export default styles;
