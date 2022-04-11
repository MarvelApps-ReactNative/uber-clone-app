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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
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
  subSecondContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    width: Size.width * 0.85,
    ...Font.body,
    fontSize: 15,
    color: COLORS.black,
  },
  addressText: {
    ...Font.body,
    fontSize: 15,
    color: COLORS.black,
    marginVertical: 10,
  },
  listButtonText: {
    ...Font.body,
    fontSize: 15,
    color: COLORS.blue2,
    marginVertical: 5,
  },
  button: {
    backgroundColor: COLORS.gray1,
    padding: 8,
    borderRadius: 90,
  },
  marker: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  markerContainer: {
    position: 'absolute',
    top: Size.height * 0.46,
    left: Size.width * 0.46,
  },
  bullets: {
    height: 30,
    width: 30,
    borderRadius: 90,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray1,
    marginRight: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bulletText: {
    ...Font.body,
    color: COLORS.black,
    fontSize: 15,
  },
  headingText: {
    textAlign: 'center',
    ...Font.body,
    color: COLORS.black,
    fontSize: 15,
  },
  smallIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    height: 4,
    width: 70,
    backgroundColor: COLORS.black,
    alignSelf: 'center',
    marginBottom: 10,
  },
  progressIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  middleContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  confirmPickupScreenMainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerText: {
    textAlign: 'center',
    ...Font.body,
    fontSize: 15,
    marginTop: 10,
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
  carLoadingAnimation: {
    width: Size.width * 0.55,
    height: Size.height * 0.27,
  },
  markerAnimation: {
    width: Size.width * 0.7,
    height: Size.height * 0.08,
  },
  covidSafetyAnimation: {
    width: Size.width * 0.45,
    height: Size.height * 0.17,
    alignSelf: 'center',
  },
});

export default styles;
