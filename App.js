import { Navigation } from "react-native-navigation"

import { registerScreen } from './src/screens/'

registerScreen()

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