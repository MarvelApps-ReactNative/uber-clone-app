import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    height: 150,
  },
  tripContainer: {
    marginHorizontal: 20,
  },
  timingContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  bajajText: {
    fontSize: 16,
    color: COLORS.black,
    ...Font.body,
  },
  tipText: {
    fontSize: 16,
    color: COLORS.dodgerblue,
    ...Font.body,
  },
  circleIcon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 10,
    width: 10,
  },
  addressContainer: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  addressText: {
    fontSize: 16,
    color: COLORS.gray,
    width: 260,
    paddingLeft: 14,
    ...Font.body,
  },
  margin: {
    marginVertical: -16,
  },
  buttonContainer: {
    backgroundColor: COLORS.lightGray1,
    alignSelf: 'flex-end',
    color: COLORS.black,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  line: {
    height: 2,
    backgroundColor: 'lightgrey',
    marginTop: 20,
  },
  profileContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 20,
  },
  profileIcon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 18,
    width: 18,
    borderRadius: 20,
  },
  profileText: {
    alignSelf: 'center',
    color: COLORS.black,
    fontSize: 16,
    width: 170,
    ...Font.body,
  },
  starIconContainer: {
    borderColor: COLORS.lightslategrey,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 6,
  },
  starIcon: {
    tintColor: COLORS.lightslategrey,
    resizeMode: 'contain',
    height: 16,
    width: 16,
    paddingRight: 18,
  },
  detailContainer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    marginVertical: 20,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
  },
  icons: {
    height: 45,
    width: 45,
    tintColor: COLORS.blue,
    marginTop: 5,
  },
  titleText: {
    fontSize: 15,
    color: COLORS.black,
    ...Font.body,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    color: COLORS.gray,
    marginLeft: 20,
    width: 200,
    alignSelf: 'center',
  },
});

export default styles;
