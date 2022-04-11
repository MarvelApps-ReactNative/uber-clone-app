import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  flexVertical: {
    flex: 0.25,
  },
  crossIcons: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  header: {
    marginVertical: 10,
  },
  headingText: {
    fontSize: 22,
    color: COLORS.black,
    ...Font.body,
  },
  topButtonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 16,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginRight: 10,
  },
  userIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  buttontText: {
    fontSize: 16,
    color: COLORS.white,
    marginLeft: 5,
    ...Font.heading,
  },
  flex: {
    flex: 1,
  },
  headingParagraphText: {
    fontSize: 15,
    color: COLORS.gray,
    ...Font.heading,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  paymentMethodsIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  smallIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  correctIcon: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    tintColor: COLORS.darkBlue,
    marginRight: 20,
  },
  margin: {
    marginLeft: 12,
  },
  smallHeadingText: {
    fontSize: 15,
    color: COLORS.black,
    ...Font.body,
  },
  switchContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  bottomTextMargin: {
    marginBottom: 20,
  },
  highlightedText: {
    fontSize: 14,
    color: COLORS.blue2,
    ...Font.body,
  },
  bottomTextVertical: {
    marginVertical: 10,
  },
});

export default styles;
