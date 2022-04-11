import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {constants} from '../../config';
import styles from './style';

interface Props {
  navigation: any;
}

const CountryList = (props: Props) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{constants.COUNTRY}</Text>
    </SafeAreaView>
  );
};

export default CountryList;
