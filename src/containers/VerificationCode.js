import React, { Component } from "react";
import { Keyboard } from 'react-native'

import { connect } from 'react-redux'
import { Container, Content, Form, Input, Button, Text, Item, Label, Spinner } from 'native-base'

class VerificationCode extends Component {
    state = {
        isLoading: false,
        error: false,
        errMessage: '',
        code: '',
    }

    send = () => {
        const { isLoading, code, error } = this.state

        Keyboard.dismiss()
        
        this.setState({isLoading: true, error: false, errMessage: ''})

        if (!code) {
            this.setState({isLoading: false, error: !error, errMessage: 'code can not be blank'})
        } else if (code.length < 5) {
            this.setState({isLoading: false, error: !error, errMessage: 'incorrect code number'})            
        }
    }
    
    render() {
        const { isLoading, error, errMessage, code } = this.state        
        return (
            <Container>
                <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1, }}>
                {isLoading &&
                    <Spinner style={{position: 'absolute', alignSelf: 'center'}} color="blue" />}
                    <Form>
                        <Item floatingLabel>
                            <Label>Your code</Label>
                            <Input
                                value={code}
                                disabled={isLoading}
                                keyboardType="number-pad"
                                returnKeyType="send"
                                maxLength={5}
                                onChangeText={(code) => this.setState({code})}
                                onSubmitEditing={() => this.send()}/>
                        </Item>
                        {error &&
                        <Label style={{color: 'red', paddingLeft: 15}}>{errMessage}</Label>}
                        <Button block disabled={isLoading} style={{marginTop: 20}} onPress={() => this.send()}>
                            <Text>SEND</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}
export default connect()(VerificationCode);
