import React from 'react'
import { Container, Header, Content, Form, Item, Input, View,Text, Right, Switch } from 'native-base';
import {Button} from 'react-native'

export default class AddTask extends React.Component{
    render(){
        return(
            <Container>
                <Header />
                <View style={styles.container}>
                    <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Task Name" />
                            <Right>
                                <Switch value= {true} />
                            </Right>
                        </Item>
                        <Item >
                        <   Input placeholder="Description" />
                        </Item>

                        <Item>
                            <Input placeholder='Completion Time' />
                        </Item>

                        <Item last style={{paddingBottom: 8}}>
                            <Input placeholder='Reminder Time' />
                        </Item>

                       <Button
                            title="Edit Task"
                            onClick={()=>alert('Add Task')}
                        />

                    </Form>
                    </Content>
                </View>
            </Container>
        )
    }
}


const styles = {
    container: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10
    }
}