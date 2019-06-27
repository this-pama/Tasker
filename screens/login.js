import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native'

export default class Login extends Component {

  render() {
    return (  
            <Container>
                <View style={styles.container}>
                    <Content>
                    <Form>
                        <Item>
                        <Input placeholder="Username" />
                        </Item>
                        <Item last>
                        <Input placeholder="Password" />
                        </Item>
                        <Button primary block>
                            <Text> Login </Text>
                        </Button>
                    </Form>
                    <View style={{paddingTop: 18, paddingLeft: 12}}>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate('SignUp')}
                        >
                            <Text>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>  
                    </View>
                    </Content>
                </View>
            </Container>
           
    );
  }
}

const styles = {
    container: {
        flex: 1,
        paddingTop: 50,
        paddingRight: 10,
        paddingLeft: 10
    }
}