import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    height: '68%',
  },
  firstContainer: {
    height: Size.height,
  },
  moneyIcon: {
    flex: 0.1,
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  carIcon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  margin: {
    marginVertical: 5,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: COLORS.white2,
    elevation: 10,
  },
  paymentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentButtonText: {
    ...Font.body,
    fontSize: 14,
    color: COLORS.black,
    flex: 0.5,
  },
  imageTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  chooseCarButtonText: {
    padding: 10,
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
  buttonSubTextSecond: {
    ...Font.body,
    fontSize: 12,
    color: COLORS.black,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  promoText: {
    textAlign: 'center',
    color: COLORS.black,
  },
  customMarker: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    marginTop: 5,
    shadowColor: COLORS.black,
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
  },
  markerText: {
    ...Font.body,
    fontSize: 15,
    color: COLORS.black,
    margin: 5,
  },
  carImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  markerImage: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  markerLocator: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  holder: {
    width: 80,
    height: 4,
    backgroundColor: 'rgba(1,1,1,0.2)',
    borderRadius: 90,
    alignSelf: 'center',
    marginVertical: 6,
  },
  timeContainer: {
    backgroundColor: 'black',
    marginBottom: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  hourMinText: {
    ...Font.body,
    fontSize: 15,
    color: COLORS.white,
    margin: 5,
  },
  flexDirection: {
    flexDirection: 'row',
  },
});

export default styles;
