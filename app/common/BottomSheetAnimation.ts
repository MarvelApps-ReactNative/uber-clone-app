import {useRef} from 'react';
import {PanResponder, Animated} from 'react-native';

export const bottomsheetPanResponder = (
  viewCurrentPosition: Animated.Value,
) => {
  const alignment = useRef(0);
  return PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gesture) => {
      alignment.current = gesture.dy;
      if (gesture.dy >= -10) {
        viewCurrentPosition.setValue(gesture.dy);
      }
    },
    onPanResponderRelease: () => {
      if (alignment.current <= 0) {
        hideTheActionSheet(viewCurrentPosition);
      } else bringUpActionSheet(viewCurrentPosition);
    },
  });
};

const bringUpActionSheet = (viewCurrentPosition: Animated.Value) => {
  Animated.spring(viewCurrentPosition, {
    toValue: 400,
    useNativeDriver: true,
  }).start();
};
const hideTheActionSheet = (viewCurrentPosition: Animated.Value) => {
  Animated.spring(viewCurrentPosition, {
    toValue: 0,
    useNativeDriver: true,
  }).start();
};
