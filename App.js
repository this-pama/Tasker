import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons'

import Login from './screens/login'
import SignUp from './screens/signUp';
import AppStack from './navigation/MainTabNavigator'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      fontIsLoading: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({
      fontIsLoading: true
    })
  }

  render(){
    if(this.state.fontIsLoading){
      return (
        <AppStack />
      )
    }
    else{
      return null
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


