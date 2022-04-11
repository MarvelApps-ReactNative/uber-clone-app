import React from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import {Abutton, Header} from '../../components';
import {buttons, Icon, ScreenConstent} from '../../config';
import styles from './style';

interface AddCardScreeenprops {
  navigation: any;
}
const AddCardScreeen = (props: AddCardScreeenprops) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header Title={ScreenConstent.addCard.ADD_CARD} />
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.numberText}>
            {ScreenConstent.addCard.CARD_NUMBER}
          </Text>
          <View style={styles.inputContainer}>
            <Image source={Icon.CREDITCARD} style={styles.icons} />
            <TextInput style={styles.cardNumberInput} />
            <Image source={Icon.CAMERA} style={styles.icons} />
          </View>

          <View style={styles.inputBoxContainer}>
            <View style={styles.input}>
              <Text style={styles.numberText}>
                {ScreenConstent.addCard.CARD_NUMBER}
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.cardInput} />
                <Image source={Icon.QESTION} style={styles.icons} />
              </View>
            </View>
            <View style={styles.input}>
              <Text style={styles.numberText}>
                {ScreenConstent.addCard.CARD_NUMBER}
              </Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.cardInput} />
                <Image source={Icon.QESTION} style={styles.icons} />
              </View>
            </View>
          </View>

          <Text style={styles.numberText}>
            {ScreenConstent.addCard.COUNTRY}
          </Text>

          <View style={styles.inputContainer}>
            <Image source={Icon.CREDITCARD} style={styles.icons} />
            <TextInput style={styles.cardNumberInput} />
            <Image source={Icon.DOWN} style={styles.icons} />
          </View>
          <Text style={styles.numberText}>
            {ScreenConstent.addCard.NICK_NAME}
          </Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.cardNumberInput} />
          </View>
        </View>
        <Abutton title={buttons.NEXT} onPress={undefined} />
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreeen;
