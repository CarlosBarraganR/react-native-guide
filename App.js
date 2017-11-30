import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/common/Header/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Login"/>
      </View>
    );
  }
}
