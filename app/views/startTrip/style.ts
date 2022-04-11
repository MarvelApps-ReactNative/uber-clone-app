import {StyleSheet} from 'react-native';
import {COLORS, Size} from '../../config';

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
    bottom: 100,
    borderRadius: 30,
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
  subSecondContainer: {
    padding: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Size.width * 0.35,
  },
  blackBox: {
    height: 50,
    width: 40,
    backgroundColor: COLORS.black,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  carImage: {
    height: 80,
    width: 80,
    resizeMode: 'stretch',
  },
  text1: {
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: 10,
  },
  textbox: {
    backgroundColor: COLORS.graybackground,
    padding: 10,
    borderRadius: 20,
    width: Size.width * 0.6,
  },
  imageContainer: {
    backgroundColor: COLORS.graybackground,
    padding: 10,
    borderRadius: 20,
  },
  smallIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 21,
    color: 'black',
    fontWeight: '600',
    width: Size.width * 0.7,
  },
  paragraphText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  buttonText: {
    fontSize: 16,
    color: '#1f003e',
    fontWeight: '600',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  listItemIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Size.width - 40) / 2,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
