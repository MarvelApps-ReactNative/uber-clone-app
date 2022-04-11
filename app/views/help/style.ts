import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  lastTripText: {
    color: COLORS.transparentBlack7,
    marginTop: 20,
    marginHorizontal: 20,
  },
  tripContainer: {
    marginHorizontal: 20,
  },
  timingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  timingText: {
    fontSize: 15,
    color: COLORS.black,
    ...Font.body,
  },
  nameText: {
    fontSize: 18,
    color: COLORS.black,
    ...Font.body,
  },
  bajajText: {
    paddingTop: 8,
    fontSize: 16,
    ...Font.body,
  },
  mapView: {
    height: 150,
  },
  mapText: {
    fontSize: 18,
    color: COLORS.transparentBlack7,
    paddingLeft: 8,
  },
  padding: {
    padding: 10,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.lightGray1,
    marginVertical: 10,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  secondContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  allTopicText: {
    color: COLORS.transparentBlack7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
});

export default styles;
