import React from 'react';
import firebase from 'firebase';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/common/Header/Header';
import LoginForm from './src/components/LoginForm/LoginForm';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnaUq2XQRtkGgDh6fxtxn7QAmeYA7Tm-U',
      authDomain: 'auth-4cc33.firebaseapp.com',
      databaseURL: 'https://auth-4cc33.firebaseio.com',
      projectId: 'auth-4cc33',
      storageBucket: 'auth-4cc33.appspot.com',
      messagingSenderId: '1084059111990'
    });

  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Header title="Login"/>
        <LoginForm/>
      </View>
    );
  }
}
