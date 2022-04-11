import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {keywords} from '../../config/dummyData/AllTopics';
import styles from './styles';

interface AccessibilityProps {
  accessibility: (
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

const AccessibilityScreen = (props: AccessibilityProps) => {
  const {accessibility} = props;
  return (
    <SafeAreaView>
      <Header Title={keywords.HELP} />
      <View style={styles.container}>
        <Text style={styles.headingText}>{keywords.ACCESSIBILITY}</Text>
        {accessibility.map((item, index) => {
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

export default AccessibilityScreen;
