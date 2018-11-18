import React, { Component } from 'react'

import { Keyboard } from 'react-native'

import { connect } from 'react-redux'
import { Container, Content, Form, Item, Label, Input, Button, Text, Spinner, Icon  } from 'native-base'

class Login extends Component {

    state = {
        isLoading: false,
        error: false,
        errMessage: '',
        phone: '',
    }

    submit = () => {
        const { isLoading, phone, error } = this.state

        Keyboard.dismiss()
        
        this.setState({isLoading: true, error: false, errMessage: ''})

        if (!phone) {
            this.setState({isLoading: false, error: !error, errMessage: 'Phone can not be blank'})
        } else if (phone.length <= 9) {
            this.setState({isLoading: false, error: !error, errMessage: 'Phone number min 10 character'})            
        }
    }
    
    render() {
        const { isLoading, error, errMessage, phone } = this.state
        return (
            <Container>
                <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1, }}>
                {isLoading &&
                        <Spinner style={{position: 'absolute', alignSelf: 'center'}} color="blue" />}
                    <Form>
                        <Item fixedLabel error={error}>
                            <Icon active name='ios-phone-portrait' />
                            <Input
                                value={phone}
                                disabled={isLoading}
                                placeholder="Phone Number"
                                keyboardType="number-pad"
                                returnKeyType="send"
                                maxLength={14}
                                onChangeText={(phone) => this.setState({phone})}
                                onSubmitEditing={() => this.submit()} />
                        </Item>
                        {error &&
                        <Label style={{color: 'red', paddingLeft: 15}}>{errMessage}</Label>}
                        <Button block disabled={isLoading} style={{marginTop: 20}} onPress={() => this.submit()}>
                            <Text>GO</Text>
                        </Button>
                    </Form>
                    
                </Content>
            </Container>
        )
    }
}

export default connect()(Login)