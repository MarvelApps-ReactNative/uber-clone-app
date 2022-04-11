import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from '../../config';
import styles from './style';

export default function BackButton(props: any) {
  const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
      <View style={styles.BackButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Icon.BACK} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
