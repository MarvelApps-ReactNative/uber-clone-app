import {Icon} from '../Icons';

const keywords = {
  HELP: 'Help',
  CHOOSE_A_TRIP: 'Choose a trip',
  YOU_HAVENT_TAKE_A_TRIP_YET: 'You haven`t taken a trip yet',
  RETRY: 'Retry',
  ACCOUNT_AND_PAYMENT_OPTIONS: 'Account and Payment Options',
  MORE: 'More',
  A_GUIDE_TO_UBER: 'A Guide to Uber',
  UBER_BUS_UBER_SHUTTLE_ISSUES: 'Uber Bus / Uber Shuttle issues',
  SIGNING_UP: 'Signing up',
  ACCESSIBILITY: 'Accessibility',
  USING_PUBLIC_TRANSPORT: 'Using Public Transport',
  UBER_MONEY: 'Uber Money',
};

const accountOptions = [
  {
    title: 'I can`t sign in or request a ride',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Changing my account settings',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Payment options',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Promos, credits and partnerships',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'I have an unknown charge',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Invoices',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Ride Passes',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'I lost my phone in Uber',
  },
  {
    title: 'Forgot something in an Uber? We will help you find it!',
  },
];

const moreScreen = [
  {
    title: 'Legal, privacy, and other inquiries',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Using Uber Eats',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Using Uber at the airport',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Using Uber for business travel',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Using Uber for package delivery',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Guest rides',
    icon: Icon.RIGHTARROW,
  },
];
const guide = [
  {
    title: 'Requesting a ride',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Taking a ride',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'After my ride',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Using Uber Lite',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Jump and Lime trip issues',
  },
];
const uberBus = [
  {
    title: 'Uber Bus Frequently Asked Questions',
  },
  {
    title: 'I have an issue with my trip or fare',
  },
  {
    title: 'I had a problem with my pick-up or drop-off',
  },
  {
    title: 'My bus did not arrive',
  },
  {
    title: 'I had an issue with my trip or fare',
  },
  {
    title: 'I had an issue with my driver',
  },
  {
    title: 'I am providing feedback on an existing route',
  },
  {
    title: 'My Uber shuttle did not arrive',
  },
  {
    title: 'I lost an item',
  },
  {
    title: 'I have another issue',
  },
  {
    title: 'I had a problem with my pick up or drop-off',
  },
];
const signingUp = [
  {
    title: 'Creating a rider account',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Downloading the rider app',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Signing up to drive',
    icon: Icon.RIGHTARROW,
  },
];
const accessibility = [
  {
    title: 'How to Use TalkBack',
    icon: Icon.RIGHTARROW,
  },
  {
    title: 'Accessibility at Uber',
  },
];
const publicTransport = [
  {
    title: 'What is the Public Transport feature?',
  },
  {
    title: 'Can I purchase Public Transport tickets through the Uber app?',
  },
  {
    title: 'Where can I view Public Transport in the app?',
  },
  {
    title: 'I had an issue while using Public Transport',
  },
  {
    title: 'I found inaccurate route information',
  },
];
const uberMoney = [
  {
    title: 'Account',
    icon: Icon.RIGHTARROW,
  },
];

export {
  keywords,
  accountOptions,
  moreScreen,
  guide,
  uberBus,
  signingUp,
  accessibility,
  publicTransport,
  uberMoney,
};
