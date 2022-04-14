import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface Buttonprops {
  title: string;
  onPress: any;
}

const CommonButton=(props: Buttonprops)=> {
  const {title, onPress} = props;
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.ButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CommonButton