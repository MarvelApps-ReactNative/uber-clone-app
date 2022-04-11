import { CountryCode } from "react-native-country-picker-modal";

interface AccountDetails {
  first_name: string;
  last_name: string;
  number: string;
  email: string;
  password: string;
  country_code: string;
  flag: CountryCode;
}

export default AccountDetails;
