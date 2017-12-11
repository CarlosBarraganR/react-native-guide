import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index';
import Header from './src/components/common/Header/Header';
import LibraryList from './src/components/LibraryList';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header title="Redux Stack"/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 22
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44
  }
});
