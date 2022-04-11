import {Icon, Screens} from '.';

const profileList = [
  {
    image: Icon.EMAIL,
    name: 'Messages',
    route: Screens.MessagesViewModel,
  },
  {
    image: Icon.GIFTBOX,
    name: 'Send a gift',
    route: '',
  },
  {
    image: Icon.SETTINGS,
    name: 'Settings',
    route: Screens.SettingsViewModel,
  },
  {
    image: Icon.DRIVER,
    name: 'Driver or deliver with uber',
    route: '',
  },
  {
    image: Icon.INFO,
    name: 'Legal',
    route: '',
  },
];

const ScreenConstent = {
  wallet: {
    NAME: 'Wallet',
    UBERCASH: 'Uber Cash',
    DESCRIPTION:
      'You can now send an Instant Uber Cash gift, for use on Uber or Uber Eats',
    PERSONAL: 'Personal',
    ADD_PAYMENT: 'Add Payment Method',
    RIDE_PROFILES: 'Ride Profiles',
    START_UBER: 'Start using Uber for Business',
    TURN_ON: 'Turn on business travel feature',
    VOUCHERS: 'Vouchers',
    ADD_VOUCHER: 'Add voucher code',
    PROMOTONS: 'permotions',
  },
  help: {
    HELP: 'Help',
    YOUR_LAST_TRIP: 'Your last trip',
    TIME_TEXT: '3/13/22, 1:19 PM',
    BAJAJ_AUTO: 'Bajaj Auto',
    ADD_A_TIP: 'Add a tip',
    AMOUNT: 'Rs.0.00',
    REPORT_AN_ISSUE_WITH_THIS_TRIP: 'Report an issue with this trip',
    ALL_TOPIC: 'All Topics',
  },
  tripDetail: {
    CIRCLE_ADDRESS:
      'Jathedar Harbans Singh Bhogal Marg, Nizamuddin, Nizamuddin East, New Delhi, Delhi 110013, India',
    SQUARE_ADDRESS: 'Block 1, WEA, Karol Bagh, New Delhi, Delhi 110060, India',
    RECEIPT: 'Receipt',
    YOUR_RIDE_WITH_ALEX_DONZO: 'Your ride with Alex Donzo',
    TRIP_DETAILS: 'Trip Details',
  },
  messagesScreen: {
    MESSAGES: 'Messages',
    COUPON: '20% off on first %',
    OFFER_TEXT: 'Offer automatically applied for limited period only',
  },
  settings: {
    ACCOUNT_SETTINGS: 'Account Settings',
    FAVOURITE: 'Favorites',
    TRUSTED_CONTACTS: 'Trusted Contacts',
    MANAGE_TRUSTED_CONTACTS: 'Manage Trusted Contacts',
    SHARE_YOUR_TRIP:
      'Share your trip status with family and friends in a single tap',
    DO_YOU_WANT_TO_SIGNOUT: 'Do you want to sign out?',
    STAY_SIGNED: 'Stay signed in to book your next trip faster',
  },
  login: {
    ENTER_NUMBER: 'Enter your mobile number ',
    DESCRIPTION:
      'If you continue, you may recive an sms for varification message and datarate may apply',
    OR: 'or',
    MOBILE_NUMBER: 'Mobile Number',
  },
  paymentOptions: {
    PAYMENT_OPTIONS: 'Payment Options',
    PERSONAL: 'Personal',
    UBER_CASH: 'Uber Cash',
    PAYMENT_METHOD: 'Payment Method',
    VOUCHER: 'Voucher',
  },
  addPayment: {
    ADD_PAYMENT: 'Add Payment',
  },
  addCard: {
    ADD_CARD: 'Add Card',
    CARD_NUMBER: 'Card Number',
    EXPIRY: 'exp. Date',
    CVV: 'CVV',
    COUNTRY: 'Country',
    NICK_NAME: 'Nickname(optional)',
  },
  home: {
    WELCOME_TO_UBER: 'Welcome to Uber?',
    RIDE_WITH_UBER: 'Ride with Uber',
    PROMO: 'Promo',
    ENTER_PICKUP_POINT: 'Enter pickup point',
    AROUND_YOU: 'Around you',
    NOW: 'Now',
  },
  scheduleRideModal: {
    SCHEDULE_A_RIDE: 'Schedule a Ride',
    DATE_TEXT: 'Thu Mar 10',
    TIME_TEXT: '5:40 PM - 5:50 PM',
    SET_PICKUP_TIME: 'Set pickup time',
  },
  searchDestination: {
    ENTER_PICKUP_TIME: 'Enter Pickup Time',
    WHERE_TO: 'Where To?',
    SET_CURRENT_LOCATION: 'Set Current Location',
    SET_LOCATION_ON_MAP: 'Set Location On Map',
    LOCATION: 'Current Location',
    LOADING: 'Loading...',
  },
  serachReasult: {
    PROMOTION_TEXT: '20% promotion applied',
  },
  confirmRide: {
    CONFIRM_PICKUP_SPOT: 'Confirm Your Pickup Spot',
    CONNECTING_YOU_TO_DRIVER: 'Connecting you to Driver',
    DROPOFF_BY: 'Dropoff by',
    ADD_OR_CHANGE: 'Add or Change',
    SWITCH: 'Switch',
  },
  covidMessage: {
    HELP_KEEP_YOUR_COMMUNITY_SAFE: 'Help keep your community safe',
    TO_HELP:
      'To help each other safe,please follow all government order about COVID-19,and take these action:',
  },
  editAccount: {
    GOOGLE: 'Google',
    CONNECTED: 'Connected',
    FACEBOOK: 'Facebook',
    EDIT_ACCOUNT: 'Edit Account',
    VERIFIED: 'Verified',
  },
  pickupRide: {
    MEET_AT_PICKUP_POINT: 'Meet at the pickup point',
    SHARE_TRIP_STATUS: 'Share trip status',
    RIDING_WITH_SOMEONE: 'Riding with someone?',
    AMOUNT: '261.91',
    PAYTM: 'Paytm',
  },
  startTrip: {
    HEADING_TO: 'Heading to',
    TIP: 'Tip',
    TRIP_DELIVER_TEXT: 'we will deliver Your Tip After The Ride',
    BANNER_TIME: '7 \n min',
  },
  cashPay: {
    CASH: 'Cash',
    YOU_HAVENT_TAKEN_A_TRIP_YET: 'You haven`t taken a trip yet',
    YOUR_DRIVER_PHONE_WILL:
      'Your driver`s phone will show you the ammount to pay at the end of the trip',
  },
  chooseRide: {
    CHOOSE_A_RIDE: 'Choose a Ride',
    UBER_GO: 'UBerGo',
    TIME: '5:24pm',
    AMOUNT: '99.91',
    NEXT_AMOUNT: '124.99',
    CASH: 'Cash',
  },
  trip: {
    CHOOSE_A_TRIP: 'Choose a trip',
    YOU_HAVENT_TAKEN_A_TRIP_YET: 'You haven`t taken a trip yet',
    RETRY: 'Retry',
    PAST: 'Past',
  },
};

const buttons = {
  GIFT_CARD: 'Gift card',
  SEND_A_GIFT: 'Send a gift',
  CONFIRM_SIGN_OUT: 'Confirm Sign Out',
  CANCEL: 'Cancel',
  NEXT: 'Next',
  FACEBOOK: 'Continue with Facebook',
  GOOGLE: 'Continue with Google',
  SAVE: 'Save',
  SIGN_OUT: 'Sign Out',
  PERSONAL: 'Personal',
  BUSINESS: 'Business',
  ADD_PAYMENT_METHOD: 'Add Payment Method',
  ADD_VOUCHER_CODE: 'Add voucher code',
  NOW: 'Now',
  CONFIRM: 'Confirm',
  CONFIRM_PICKUP: 'Confirm Pickup',
  SEARCH: 'Search',
  READY_TO_RIDE: 'Ready To ride',
  ADD_OR_CHANGE: 'Add or Change',
  SWITCH: 'Switch',
  SPLIT_FARE: 'Split Fare',
  SHARE: 'Share',
  SAFETY: 'Safety',
};

const constants = {
  NAME: 'John Doe',
  NUMBER: '+91-88XXXXXX56',
  EMAIL_ID: 'john.doe@gmail.com',
  NO_ROUTE_ALERT:
    'Sorry for inconvenience we are unable to provide our service here ',
  COUNTRY: 'CountryList',
  UBER: 'Uber',
};

const onboarding = {
  UBER: 'Uber',
  MOVE_WITH_SAFETY: 'Move with Safety',
  GET_STARTED: 'Get Started',
};

const alertMessage = {
  ALERT_MESSAGE:
    'Sorry for inconvenience we are unable to provide our service here.',
  OK: 'OK',
};

const APIKEY = 'AIzaSyD907Ej8YHUdjWWqhkW76sT-ALJzU0btqY';

export {
  profileList,
  ScreenConstent,
  buttons,
  constants,
  APIKEY,
  onboarding,
  alertMessage,
};
