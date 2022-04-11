import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  secondContainer: {
    flex: 1,
  },
  userContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  editIconContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: COLORS.black,
    borderRadius: 50,
    bottom: 0,
    padding: 6,
  },
  editIcon: {
    tintColor: COLORS.white,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  subConatiner: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 14,
    color: COLORS.gray2,
    marginBottom: 10,
    ...Font.body,
  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 18,
    color: COLORS.black,
    ...Font.body,
    marginStart: 5,
  },
  verificationText: {
    color: COLORS.green,
    alignSelf: 'center',
  },
  footerContainer: {
    paddingHorizontal: 20,
  },
  footerItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  footerItemSub: {
    flexDirection: 'row',
  },
  googleImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  footerItemText: {
    color: COLORS.black,
    fontSize: 18,
    marginStart: 10,
  },
  footerConnectionText: {
    color: COLORS.green,
  },
});

export default styles;
