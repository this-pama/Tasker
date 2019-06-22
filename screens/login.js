import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, View, Button, Text } from 'native-base';

export default class Login extends Component {

  render() {
    return (  
            <Container>
                <Header />
                <View style={styles.container}>
                    <Content>
                    <Form>
                        <Item>
                        <Input placeholder="Username" />
                        </Item>
                        <Item last>
                        <Input placeholder="Password" />
                        </Item>
                        
                    </Form>
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