import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationProp} from '../../models';
import {constants} from '../../config';
import styles from './style';

const CountryListScreen = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{constants.COUNTRY}</Text>
    </SafeAreaView>
  );
};

export default CountryListScreen;
