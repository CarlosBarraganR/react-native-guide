import React from 'react';
import firebase from 'firebase';
import {StyleSheet, View, Button} from 'react-native';
import Header from './src/components/common/Header/Header';
import LoginForm from './src/components/LoginForm/LoginForm';
import Spinner from './src/components/common/Spinner/Spinner';

export default class App extends React.Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnaUq2XQRtkGgDh6fxtxn7QAmeYA7Tm-U',
      authDomain: 'auth-4cc33.firebaseapp.com',
      databaseURL: 'https://auth-4cc33.firebaseio.com',
      projectId: 'auth-4cc33',
      storageBucket: 'auth-4cc33.appspot.com',
      messagingSenderId: '1084059111990'
    });

    firebase
      .auth()
      .onAuthStateChanged((user) => {

        if (user) {
          this.setState({loggedIn: true});
        } else {
          this.setState({loggedIn: false});
        }

      });

  }

  renderAppView() {
    switch(this.state.loggedIn) {
      case true : 
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
            title="Log Out"
            accessibilityLabel="Log Out"/>)
      case false : 
        return <LoginForm />
      default : 
        return <Spinner size="large"/>;

    }
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Header title="Login"/>
        {this.renderAppView()}
      </View>
    );
  }
}
