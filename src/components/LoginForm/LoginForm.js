import React, {Component} from 'react';
import firebase from 'firebase';
import {View, Button, Text, TextInput} from 'react-native';
import Card from '../common/Card/Card';
import CardSection from '../common/CardSection/CardSection';
import Input from '../common/Input/Input';
import Spinner from '../common/Spinner/Spinner';

class LoginForm extends Component {

    state = {
        userInput: '',
        passInput: '',
        error: '',
        loading: false
    }

    logInFirebase(){
        //another way to declare the state and avoid writing this.state every time
        const { userInput, passInput } = this.state 
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(userInput, passInput)
            .then(this.loginSuccess.bind(this))
            .catch(
                this.loginFail.bind(this)
            );
    }

    loginFail(){
        console.log('We didnt made it :(');
        this.setState({loading: false, error: 'Auth Failed Try Again'})
        console.log(this.state.error);
    }

    loginSuccess(){
        console.log('We made It!! :)');
        this.setState({loading: false, userInput: '', passInput: ''});
    }

    showButtonOrSpinner(){
        if(this.state.loading){
            return <Spinner size='small'/>
        }
            
        return <Button
                    onPress={this.logInFirebase.bind(this)}
                    title="Log In"
                    accessibilityLabel="Learn more"/>
        
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.state.userInput}
                        placeholder="mail@mail.com"
                        onChangeText={user => this.setState({userInput: user})}/>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        value={this.state.passInput}
                        placeholder="password"
                        onChangeText={pass => this.setState({passInput: pass})}/>
                </CardSection>
                <CardSection>
                    {this.showButtonOrSpinner()}
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;