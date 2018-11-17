import React, { Component } from 'react'
import { View } from 'react-native'

import { Navigation } from 'react-native-navigation'
import { Container, Content, Footer, FooterTab, Button, Text, Body  } from 'native-base'

class WelcomeScreen extends Component {

  _goToScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'LoginScreen',
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
    return(
      <Container>

        <Content padder contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Welcome</Text>
          <Text>To</Text>
          <Text>BChat Bro!</Text>
        </Content>
        
        <Footer>
          <FooterTab>
            <Button block onPress={() => this._goToScreen()}>
              <Text>START</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default WelcomeScreen