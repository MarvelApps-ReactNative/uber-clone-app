import React, {useEffect, useState} from 'react';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {ScreenConstent, Screens} from '../../config';
import {useDispatch, useSelector} from 'react-redux';
import {setDateScheduleRide, setTimeScheduleRide} from '../../redux/actions';
import {formatDate, formatTime} from '../../common';

const ScheduleRideModal = ({visible, setVisible, navigation}: any) => {
  const scheduleRide = useSelector((state: any) => state.scheduleRide);
  const dispatch = useDispatch();
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

  const [date, setDate] = useState(
    scheduleRide.date
      ? scheduleRide.date
      : ScreenConstent.scheduleRideModal.DATE_TEXT,
  );
  const [time, setTime] = useState(
    scheduleRide.time
      ? scheduleRide.time
      : ScreenConstent.scheduleRideModal.TIME_TEXT,
  );

  const setPickupTime = () => {
    dispatch(setDateScheduleRide(date));
    dispatch(setTimeScheduleRide(time));
    setVisible(false);
  };

  const reset = () => {
    setDate(
      scheduleRide.date
        ? scheduleRide.date
        : ScreenConstent.scheduleRideModal.DATE_TEXT,
    );
    setTime(
      scheduleRide.time
        ? scheduleRide.time
        : ScreenConstent.scheduleRideModal.TIME_TEXT,
    );
  };
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setVisible(false);
            reset();
          }}
          style={styles.emptyView}
        />
        <View style={styles.mainView}>
          <View style={styles.containerView}>
            <Text style={styles.titleText}>
              {ScreenConstent.scheduleRideModal.SCHEDULE_A_RIDE}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.containerView}>
            <Text style={styles.calenderTimeText}>{date}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowTimePicker(true)}
            style={styles.containerView}>
            <Text style={styles.calenderTimeText}>{time}</Text>
          </TouchableOpacity>
          <View style={styles.containerView}>
            <TouchableOpacity
              onPress={() => {
                setPickupTime(), navigation.navigate(Screens.SearchViewModel);
              }}
              style={styles.setPickupTimeButton}>
              <Text style={styles.setTimeText}>
                {ScreenConstent.scheduleRideModal.SET_PICKUP_TIME}
              </Text>
            </TouchableOpacity>
          </View>
          {showDatePicker && (
            <RNDateTimePicker
              testID="datePicker"
              value={new Date()}
              mode={'date'}
              is24Hour={true}
              display="calendar"
              minimumDate={new Date()}
              onChange={(event, date) => {
                if (date != undefined) {
                  setDate(formatDate(date));
                }
                setShowDatePicker(false);
              }}
            />
          )}
          {showTimePicker && (
            <RNDateTimePicker
              testID="timePicker"
              value={new Date()}
              mode={'time'}
              is24Hour={false}
              display="clock"
              onChange={(event, time) => {
                if (time != undefined) {
                  let addedMinute = new Date(time);
                  addedMinute.setMinutes(time.getMinutes() + 10);
                  setTime(formatTime(time) + ' - ' + formatTime(addedMinute));
                }
                setShowTimePicker(false);
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ScheduleRideModal;
