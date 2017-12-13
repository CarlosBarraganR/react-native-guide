import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers/index';
import Header from './src/components/common/Header/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCV8in_JCByQ3rjZybetGjbABPjqSoIeoA",
      authDomain: "manager-app-e8cd4.firebaseapp.com",
      databaseURL: "https://manager-app-e8cd4.firebaseio.com",
      projectId: "manager-app-e8cd4",
      storageBucket: "manager-app-e8cd4.appspot.com",
      messagingSenderId: "551422960014"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header title="Login "/>
          <LoginForm />
        </View>
      </Provider>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 0
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44
  }
});
