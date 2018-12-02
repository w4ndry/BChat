import { Navigation } from "react-native-navigation"
import { Provider } from 'react-redux'

import store from './src/store/'
import { registerScreens } from './src/screens/'

registerScreens(store, Provider)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false,
    }
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "WelcomeScreen"
          }
        }]
      }
    }
  });
});