import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Styles } from './Screens/Styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={ Styles.container }>
        <Text
        style={{ color: "white" }}
        >Pruthvi Darshan S S</Text>

        <StatusBar style="auto" />
      </View>
    );
  };
}
