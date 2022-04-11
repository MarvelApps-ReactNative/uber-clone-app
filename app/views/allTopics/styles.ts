import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config/Theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  ViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: COLORS.lightslategrey,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    color: COLORS.black,
    ...Font.body,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  headingText: {
    color: COLORS.black,
    fontSize: 24,
    ...Font.heading,
  },
  titleText: {
    color: COLORS.transparentBlack7,
    fontSize: 18,
    ...Font.body,
  },
  backIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    alignSelf: 'center',
  },
});

export default styles;
