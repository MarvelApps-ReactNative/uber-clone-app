import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {signOut} from '../../common/GoogleLogin';
import {buttons, ScreenConstant, Screens} from '../../config';
import styles from './style';

interface SettingModalprops {
  navigation: any;
  ModalVisible: any;
  setModalVisible: any;
}
const SettingModal = (props: SettingModalprops) => {
  const {navigation, ModalVisible, setModalVisible} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={ModalVisible}
      onRequestClose={() => {
        setModalVisible(!ModalVisible);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.subModalContainer}>
          <Text style={styles.modalMessageText}>
            {ScreenConstant.settings.DO_YOU_WANT_TO_SIGNOUT}
          </Text>
          <Text style={styles.staySignedText}>
            {ScreenConstant.settings.STAY_SIGNED}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.replace(Screens.OnBoardingViewModel), signOut();
            }}>
            <Text style={styles.buttonText}>{buttons.CONFIRM_SIGN_OUT}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelContainer}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>{buttons.CANCEL}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SettingModal;
