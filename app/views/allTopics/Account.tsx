import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {keywords} from '../../config/dummyData/AllTopics';
import styles from './styles';

interface AccountProps {
  accountOptions: (
    | {
        title: string;
        icon: any;
      }
    | {
        title: string;
        icon?: undefined;
      }
  )[];
}

const Account = (props: AccountProps) => {
  const {accountOptions} = props;
  return (
    <SafeAreaView>
      <Header Title={keywords.HELP} />
      <View style={styles.container}>
        <Text style={styles.headingText}>
          {keywords.ACCOUNT_AND_PAYMENT_OPTIONS}
        </Text>
        {accountOptions.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.buttonContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Image source={item.icon} style={styles.backIcon} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Account;
