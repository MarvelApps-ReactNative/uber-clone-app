import {StyleSheet} from 'react-native';
import {COLORS, Font, Size} from '../../config';

const UPPER_SPACE = Size.height * 0.2;
const UPPER_SPACE_SCHEDULE = Size.height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    padding: 10,
    backgroundColor: '#d6d6d6',
    marginVertical: 5,
    width: Size.width * 0.84,
    color: COLORS.black,
    fontSize: 15,
  },
  firstContainer: {
    height: UPPER_SPACE,
    backgroundColor: COLORS.graybackground,
    paddingHorizontal: 10,
    elevation: 10,
  },
  firstContainerSchedule: {
    height: UPPER_SPACE_SCHEDULE,
    backgroundColor: COLORS.graybackground,
    paddingHorizontal: 10,
    elevation: 10,
  },
  backbutton: {
    marginVertical: 5,
    marginRight: 10,
  },
  secondContainer: {
    height: Size.height * 0.8,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginStart: 5,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  plusButton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  plusText: {
    fontSize: 30,
    color: COLORS.black,
  },
  scheduleView: {
    padding: 10,
    backgroundColor: '#d6d6d6',
    marginVertical: 5,
    width: Size.width * 0.84,
    marginStart: 30,
  },
  line: {
    height: 35,
    width: 2,
    backgroundColor: COLORS.black,
    opacity: 0.5,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    left: 20,
    right: 20,
    bottom: 20,
    position: 'absolute',
  },
  subModalContainer: {
    position: 'absolute',
    padding: 20,
    top: UPPER_SPACE,
    right: 0,
    left: 0,
    backgroundColor: COLORS.graybackground,
  },
  subModalContainerSchedule: {
    position: 'absolute',
    padding: 20,
    top: UPPER_SPACE_SCHEDULE,
    right: 0,
    left: 0,
    backgroundColor: COLORS.graybackground,
  },
  searchTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  searchImageContainer: {
    height: 30,
    width: 30,
    borderRadius: 90,
    backgroundColor: COLORS.gray1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  searchIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  paragraph: {
    ...Font.body,
    fontSize: 15,
    color: COLORS.black,
  },
  para2: {
    ...Font.body,
    fontSize: 14,
    color: COLORS.gray,
  },
  carIcon: {
    height: 50,
    width: 50,
  },
  markerIcon: {
    height: 40,
    width: 40,
  },
  midMarker: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: Size.height * 0.4,
    left: Size.width / 2 - 24,
  },
  carMarker: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  height: {
    height: 800,
  },
});

export default styles;
