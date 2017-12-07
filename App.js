import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index'
import Header from './src/components/common/Header/Header'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header title="Redux Stack"/>
          <Text>New app hoomie</Text>
        </View>
      </Provider>
    );
  }
}
