import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import AlbumList from './src/components/AlbumList/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Albums"/>
        <AlbumList />
      </View>
    );
  }
}
