import axios from 'axios';
import React, {useEffect} from 'react';
import CountryListScreen from '../views/countryList/CountryListScreen';

const CountryListViewModel = ({navigation}: any) => {
  const fetch = async () => {
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${text}&key=${API_KEY}`,
      })
      .then(response => {
        return response.data.result.geometry.location;
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <CountryListScreen
      {...{
        navigation,
      }}
    />
  );
};

export default CountryListViewModel;
