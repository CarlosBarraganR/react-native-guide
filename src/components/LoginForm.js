import React, {Component} from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Card from '../components/common/Card/Card';
import CardSection from '../components/common/CardSection/CardSection';
import Input from '../components/common/Input/Input';
import Spinner from '../components/common/Spinner/Spinner';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    };

    onPassChange(text) {
        this.props.passChanged(text);
    }

    onLoginUser() {
        const {email, pass} = this.props;
        this.props.loginUser({email, pass});
    }

    renderError() {
        return this.props.error
            ?   <View>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            : null;
    }

    renderButton(){
        return !this.props.loading
            ? <Button
                onPress={this.onLoginUser.bind(this)}
                title="Log in!"/>
            : <Spinner size="large" />;
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this
                        .onEmailChange
                        .bind(this)}
                        value={this.props.email}/>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        onChangeText={this
                        .onPassChange
                        .bind(this)}
                        value={this.props.pass}/>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                {this.renderError()}
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        padding: 10,
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
    }
});

const mapPropsToState = (state) => {
    return {
        email: state.auth.email, 
        pass: state.auth.pass, 
        error: state.auth.error, 
        loading: state.auth.loading
    };
};

export default connect(mapPropsToState, actions)(LoginForm);