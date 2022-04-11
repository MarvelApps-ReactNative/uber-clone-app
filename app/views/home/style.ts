import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'flex-end',
  },
  userIcon: {
    borderRadius: 20,
    height: 30,
    width: 30,
  },
  bannerContainer: {
    backgroundColor: COLORS.darkgreen,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 12,
    height: 130,
  },
  bannerTextContainer: {
    padding: 10,
    alignSelf: 'center',
  },
  bannerText: {
    fontSize: 20,
    color: COLORS.white,
    ...Font.heading,
  },
  rideText: {
    fontSize: 17,
    color: COLORS.white,
    ...Font.heading,
  },
  titleText: {
    fontSize: 20,
    color: COLORS.black,
    ...Font.heading,
  },
  paragraphText: {
    fontSize: 17,
    color: COLORS.black,
    ...Font.heading,
  },
  rightArrowIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: COLORS.gray,
  },
  banner: {
    height: Size.height * 0.16,
    width: Size.width * 0.38,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    alignSelf: 'center',
  },
  rideTypeMainContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
  rideTypeContainer: {
    backgroundColor: COLORS.graybackground,
    width: Size.width * 0.46,
    borderRadius: 12,
    padding: 10,
  },
  renderItem: {
    backgroundColor: COLORS.green,
    paddingHorizontal: 20,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 4,
    top: -15,
  },
  promoText: {
    color: COLORS.white,
    fontSize: 16,
    ...Font.body,
  },
  rideTypeText: {
    fontSize: 16,
    color: COLORS.black,
    ...Font.heading,
  },
  carIcon: {
    height: 60,
    width: Size.width * 0.65,
    resizeMode: 'contain',
  },
  pickupPointConatiner: {
    backgroundColor: COLORS.graybackground,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  timeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 22,
    width: 110,
  },
  smallIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainButtonContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: COLORS.graybackground,
    width: 35,
    height: 35,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 5,
    marginStart: 10,
  },
  seperator: {
    borderTopWidth: 1,
    marginVertical: 10,
    marginLeft: 50,
    borderColor: COLORS.graybackground,
  },
  map: {
    marginVertical: 20,
  },
  mapStyle: {
    height: 160,
  },
});

export default styles;
