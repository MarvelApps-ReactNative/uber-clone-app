import {StyleSheet} from 'react-native';
import {COLORS, Font} from '../../config';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black,
    marginStart: 5,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  nameText: {
    fontSize: 35,
    color: COLORS.black,
    marginVertical: 15,
    marginStart: 5,
  },
  scrollViewContainer: {
    padding: 10,
  },
  cashText: {
    fontSize: 35,
    color: COLORS.black,
  },
  descriptionText: {
    fontSize: 15,
    color: COLORS.gray,
    width: '86%',
    marginVertical: 10,
  },
  titleText: {
    fontSize: 14,
    color: COLORS.black,
    ...Font.body,
  },
  giftCardText: {
    fontSize: 14,
    color: COLORS.white,
    ...Font.body,
  },
  sendGiftText: {
    fontSize: 18,
    color: COLORS.black,
    ...Font.body,
  },
  cardContainer: {
    backgroundColor: COLORS.graybackground,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  giftCardButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.black,
    borderRadius: 30,
    width: 100,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginVertical: 10,
  },
  sendGiftCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginBottom: 20,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  sendGiftButton: {
    backgroundColor: COLORS.lightGray1,
    borderRadius: 30,
    width: 100,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  smallIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  margin: {
    marginLeft: 12,
  },
  smallHeadingText: {
    fontSize: 15,
    color: COLORS.black,
    ...Font.body,
  },
  correctIconContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  correctIcon: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    tintColor: COLORS.darkBlue,
    marginRight: 20,
  },
  addPaymentText: {
    fontSize: 16,
    color: COLORS.blue2,
  },
  seperator: {
    borderBottomWidth: 1,
    left: -10,
    width: '110%',
    marginVertical: 10,
    borderColor: COLORS.graybackground,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 90,
    marginRight: 10,
  },
  driverIconContainer: {
    backgroundColor: COLORS.gray,
    padding: 10,
    borderRadius: 90,
    marginRight: 10,
  },
  driverIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  startUberText: {
    fontSize: 14,
    color: COLORS.blue2,
    ...Font.body,
  },
  turnOnText: {
    fontSize: 14,
    color: COLORS.gray,
    ...Font.body,
  },
});

export default styles;
