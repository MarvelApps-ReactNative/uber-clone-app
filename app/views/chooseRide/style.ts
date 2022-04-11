import {StyleSheet} from 'react-native';
import {Font, COLORS} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.05,
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    padding: 20,
  },
  headerIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  headerText: {
    flex: 0.8,
    ...Font.body,
    color: COLORS.white,
    fontSize: 24,
  },
  flex: {
    flex: 1,
  },
  ChooseCarButtonText: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
  buttonText: {
    ...Font.body,
    fontSize: 16,
    color: COLORS.black,
  },
  buttonSubText: {
    ...Font.body,
    fontSize: 12,
    color: COLORS.black,
  },
  carIcon: {
    flex: 0.3,
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  imageTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    padding: 15,
  },
  payementButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentButtonText: {
    ...Font.body,
    fontSize: 12,
    color: COLORS.black,
    flex: 0.5,
  },
  moneyIcon: {
    flex: 0.1,
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default styles;
