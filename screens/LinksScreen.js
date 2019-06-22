import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <View style={{paddingTop: 50}}>
      <Text>This is a Link screen</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links Screen',
};

