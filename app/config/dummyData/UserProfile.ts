import {Icon} from '../Icons';
import Screens from '../Screen';

const UserProfile = [
  {
    image: Icon.HELP,
    name: 'Help',
    route: Screens.HelpViewModel,
  },
  {
    image: Icon.WALLET,
    name: 'Wallet',
    route: Screens.WalletViewModel,
  },
  {
    image: Icon.CLOCK,
    name: 'Trips',
    route: Screens.TripViewModal,
  },
];

export {UserProfile};
