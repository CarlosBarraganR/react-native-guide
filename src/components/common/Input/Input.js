import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

export default Input = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.label}</Text>
            <TextInput
                style={styles.inputStyle}
                value={props.value}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={props.secureTextEntry}/>
        </View>
    );
}

//Important flex structure!!!!
const styles = StyleSheet.create({
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 15,
        paddingLeft: 10,
        flex: 1
    },
    inputStyle: {
        width: 200,
        height: 45,
        fontSize: 18,
        lineHeight: 13,
        flex: 2
    }
});