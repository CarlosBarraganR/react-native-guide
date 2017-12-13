import React, {Component} from 'react';
import {Button, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Card from '../components/common/Card/Card';
import CardSection from '../components/common/CardSection/CardSection';
import Input from '../components/common/Input/Input';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    };

    onPassChange(text) {
        this.props.passChanged(text);
    }

    onLoginUser(){
        const { email, pass } = this.props;
        this.props.loginUser({email, pass});
    }

    renderError(){
        return this.props.error ? <Text>{this.props.error}</Text> : null
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry 
                        label="Password" 
                        placeholder="********"
                        onChangeText={this.onPassChange.bind(this)}/>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onLoginUser.bind(this)} title="Log in!"/>
                </CardSection>
                {this.renderError()}
            </Card>
        );
    }
}

const mapPropsToState = (state) => {
    return {
        email: state.auth.email,
        pass: state.auth.pass,
        error: state.auth.error
    };
};

export default connect(mapPropsToState, actions)(LoginForm);