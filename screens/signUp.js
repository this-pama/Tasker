import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Button, Text } from 'native-base';
import {KeyboardAvoidingView, TouchableOpacity} from 'react-native';

export default class SignUp extends Component {

  render() {
    return (       
            <Container>
                  
                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                        <Content>
                            <Form>
                                <Item>
                                <Input placeholder="First Name" />
                                </Item>
                                <Item >
                                <Input placeholder="Last Name" />
                                </Item>
                                <Item >
                                <Input placeholder="Username" />
                                </Item>
                                <Item >
                                <Input placeholder="Password" />
                                </Item>
                                <Item >
                                <Input placeholder="Bio" />
                                </Item>
                                <Item >
                                <Input placeholder="Email" />
                                </Item>
                                <Item >
                                <Input placeholder="Phone Number" />
                                </Item>
                                <Item >
                                <Input placeholder="Address" />
                                </Item>
                                <Item last >
                                <Input placeholder="State" />
                                </Item>
                                <Button primary block>
                                    <Text> Sign Up </Text>
                                </Button>
                                <TouchableOpacity
                                    style={{paddingTop: 18, paddingLeft: 12}}
                                    onPress={()=> this.props.navigation.navigate('Login')}
                                >
                                    <Text>Already have an account? Log in</Text>
                                </TouchableOpacity> 
                            </Form>
                        </Content>
                    </KeyboardAvoidingView> 
                </Container>         
    );
  }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 20,
        paddingRight: 10,
        paddingLeft: 10
    }
}