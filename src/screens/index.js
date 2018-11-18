import { Navigation } from "react-native-navigation"

import WelcomeScreen from "./WelcomeScreen"
import LoginScreen from "./LoginScreen"

export const registerScreens = (store, Provider) => {
    Navigation.registerComponent(`WelcomeScreen`, () => WelcomeScreen)
    Navigation.registerComponentWithRedux(`LoginScreen`, () => LoginScreen, Provider, store)
}