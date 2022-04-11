import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstContainer: {
    flex: 1,
  },
  mapStyle: {
    height: Size.height * 0.6,
  },
  markerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  marker: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  secondContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.white,
  },
  subSecondMainContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  subSecondContainer: {
    marginHorizontal: 20,
  },
  subFooterContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  smallLine: {
    borderBottomWidth: 3,
    width: 60,
    alignSelf: 'center',
    borderColor: COLORS.lightGray1,
    paddingTop: 12,
    borderRadius: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blackBox: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.black,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 18,
  },
  elevationLine: {
    elevation: 4,
    width: '100%',
    borderWidth: 0.3,
    borderColor: COLORS.lightGray2,
  },
  carImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  carNumberText: {
    fontSize: 20,
    color: COLORS.black,
    marginLeft: 40,
    ...Font.body,
  },
  knowYourDriverText: {
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: 10,
  },
  textbox: {
    backgroundColor: COLORS.graybackground,
    padding: 12,
    borderRadius: 20,
    width: Size.width * 0.6,
  },
  messageText: {
    color: COLORS.gray,
    paddingLeft: 10,
  },
  imageContainer: {
    backgroundColor: COLORS.graybackground,
    padding: 12,
    borderRadius: 20,
  },
  smallIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  BannerContainer: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    height: 130,
  },
  bannerTextContainer: {
    padding: 10,
    alignSelf: 'center',
  },
  bannerText: {
    fontSize: 20,
    color: COLORS.white,
    ...Font.body,
  },
  rideText: {
    fontSize: 16,
    color: COLORS.white,
  },
  headingText: {
    fontSize: 20,
    color: COLORS.black,
    ...Font.body,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '600',
  },
  buttonText: {
    fontSize: 15,
    color: COLORS.blue2,
  },
  banner: {
    height: 120,
    width: 120,
    tintColor: COLORS.white,
    marginRight: 10,
    marginTop: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  listItemIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: COLORS.gray,
    marginTop: 5,
  },
  textColor: {
    color: COLORS.gray,
  },
  align: {
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Size.width - 40) / 2,
    borderWidth: 0.5,
    padding: 10,
    borderColor: COLORS.gray,
  },
  footerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelText: {
    fontSize: 16,
    color: COLORS.red,
    fontWeight: '600',
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
  markertext: {
    ...Font.body,
    fontSize: 15,
    color: COLORS.black,
    margin: 5,
  },
  markerImage: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  MarkerLocator: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  carImageStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default styles;
