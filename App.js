import { Navigation } from "react-native-navigation"

import { registerScreen } from './src/screens/'

registerScreen()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "WelcomeScreen"
      }
    }
  });
});