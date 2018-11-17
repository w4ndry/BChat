import { Navigation } from "react-native-navigation"

import WelcomeScreen from "./WelcomeScreen"
import LoginScreen from "./LoginScreen"

export const registerScreen = () => {
    Navigation.registerComponent(`WelcomeScreen`, () => WelcomeScreen)
    Navigation.registerComponent(`LoginScreen`, () => LoginScreen)
}