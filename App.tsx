import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import Routenavigation from './app/routes';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "MapViewDirections Error: Error on GMAPS route request: ZERO_RESULTS"
]);

const App = () => {
  return (
    <Provider store={store}>
      <Routenavigation />
    </Provider>
  );
};

export default App;
