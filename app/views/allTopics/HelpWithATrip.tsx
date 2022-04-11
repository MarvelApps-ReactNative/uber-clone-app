import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header} from '../../components';
import {keywords} from '../../config/dummyData/AllTopics';
import styles from './styles';

const HelpWithATrip = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={keywords.CHOOSE_A_TRIP} />
      <View style={styles.ViewContainer}>
        <Text style={styles.text}>{keywords.YOU_HAVENT_TAKE_A_TRIP_YET}</Text>
        <View style={styles.button}>
          <Text style={styles.text}>{keywords.RETRY}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HelpWithATrip;
