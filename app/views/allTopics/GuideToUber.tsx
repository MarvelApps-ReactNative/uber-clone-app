import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {keywords} from '../../config/dummyData/AllTopics';
import styles from './styles';

interface GuideProps {
  guide: (
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

const GuidScreen = (props: GuideProps) => {
  const {guide} = props;
  return (
    <SafeAreaView>
      <Header Title={keywords.HELP} />
      <View style={styles.container}>
        <Text style={styles.headingText}>{keywords.A_GUIDE_TO_UBER}</Text>
        {guide.map((item, index) => {
          return (
            <TouchableOpacity style={styles.buttonContainer} key={index}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Image source={item.icon} style={styles.backIcon} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default GuidScreen;
