import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../components';
import {keywords} from '../../config/dummyData/AllTopics';
import styles from './styles';

interface SigningUpProps {
  signingUp: {
    title: string;
    icon: any;
  }[];
}

const SigningUpScreen = (props: SigningUpProps) => {
  const {signingUp} = props;
  return (
    <SafeAreaView>
      <Header Title={keywords.HELP} />
      <View style={styles.container}>
        <Text style={styles.headingText}>{keywords.SIGNING_UP}</Text>
        {signingUp.map((item, index) => {
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

export default SigningUpScreen;
