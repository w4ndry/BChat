import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'

import Login from '../containers/Login'

class LoginScreen extends Component {
    _goToScreen = () => {
        Navigation.push(this.props.componentId, {
          component: {
            name: 'VerificationCodeScreen',
            passProps: {
              text: 'Pushed screen'
            },
            options: {
              topBar: {
                title: {
                  text: 'Pushed screen title'
                }
              }
            }
          }
        });
    }
    
    render() {
        return (
            <Login _goToScreen={this._goToScreen}/>
        )
    }
}

export default LoginScreen