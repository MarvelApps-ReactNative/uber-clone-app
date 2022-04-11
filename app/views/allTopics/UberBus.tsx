import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {keywords} from '../../config/dummyData/AllTopics';
import styles from './styles';

interface UberBusProps {
  uberBus: {
    title: string;
  }[];
}

const UberBusScreen = (props: UberBusProps) => {
  const {uberBus} = props;
  return (
    <SafeAreaView>
      <Header Title={keywords.HELP} />
      <View style={styles.container}>
        <Text style={styles.headingText}>
          {keywords.UBER_BUS_UBER_SHUTTLE_ISSUES}
        </Text>
        {uberBus.map((item, index) => {
          return (
            <TouchableOpacity style={styles.buttonContainer} key={index}>
              <Text style={styles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default UberBusScreen;
