import React from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import {CommonButton, Header} from '../../components';
import {buttons, Icon, ScreenConstant} from '../../config';
import {NavigationProp} from '../../models';
import styles from './style';

const AddCardScreeen = (props: NavigationProp) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstant.addCard.ADD_CARD} />
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.numberText}>
            {ScreenConstant.addCard.CARD_NUMBER}
          </Text>
          <View style={styles.inputContainer}>
            <Image source={Icon.CREDITCARD} style={styles.icons} />
            <TextInput style={styles.cardNumberInput} />
            <Image source={Icon.CAMERA} style={styles.icons} />
          </View>

          <View style={styles.inputBoxContainer}>
            <View style={styles.input}>
              <Text style={styles.numberText}>
                {ScreenConstant.addCard.CARD_NUMBER}
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.cardInput} />
                <Image source={Icon.QESTION} style={styles.icons} />
              </View>
            </View>
            <View style={styles.input}>
              <Text style={styles.numberText}>
                {ScreenConstant.addCard.CARD_NUMBER}
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.cardInput} />
                <Image source={Icon.QESTION} style={styles.icons} />
              </View>
            </View>
          </View>

          <Text style={styles.numberText}>
            {ScreenConstant.addCard.COUNTRY}
          </Text>

          <View style={styles.inputContainer}>
            <Image source={Icon.CREDITCARD} style={styles.icons} />
            <TextInput style={styles.cardNumberInput} />
            <Image source={Icon.DOWN} style={styles.icons} />
          </View>
          <Text style={styles.numberText}>
            {ScreenConstant.addCard.NICK_NAME}
          </Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.cardNumberInput} />
          </View>
        </View>
        <CommonButton title={buttons.NEXT} onPress={undefined} />
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreeen;
