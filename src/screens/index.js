import { Navigation } from "react-native-navigation"

import WelcomeScreen from "./WelcomeScreen"

export const registerScreen = () => {
    Navigation.registerComponent(`WelcomeScreen`, () => WelcomeScreen)
}