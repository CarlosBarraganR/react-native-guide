import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Text>New app hoomie</Text>
      </Provider>
    );
  }
}
