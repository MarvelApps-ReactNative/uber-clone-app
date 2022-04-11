import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  paddingContainer: {
    padding: 20,
  },
  closeIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 30,
    color: COLORS.black,
    width: 200,
    ...Font.heading,
  },
  headingText: {
    fontSize: 30,
    color: COLORS.black,
    ...Font.heading,
  },
  bodyText: {
    fontSize: 16,
    color: COLORS.black,
    ...Font.body,
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.graybackground,
    justifyContent: 'space-around',
    borderRadius: 20,
    padding: 4,
    width: 60,
  },
  smallIcon: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: COLORS.black,
  },
  userIcon: {
    height: 60,
    width: 60,
    borderRadius: 40,
    marginBottom: 24,
  },
  ratingText: {
    fontSize: 15,
    color: COLORS.black,
    ...Font.body,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxStyle: {
    backgroundColor: COLORS.graybackground,
    justifyContent: 'center',
    alignItems: 'center',
    height: Size.height * 0.1,
    width: Size.width * 0.275,
    borderRadius: 10,
  },
  lightIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 8,
    tintColor: COLORS.black,
  },
  seperator: {
    width: '100%',
    borderBottomWidth: 8,
    borderColor: COLORS.graybackground,
  },
  list: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  icons: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    alignSelf: 'center',
  },
  listItem: {
    fontSize: 16,
    color: COLORS.black,
    marginLeft: 20,
    ...Font.body,
  },
});

export default styles;
