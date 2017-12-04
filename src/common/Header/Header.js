import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {

    const { viewStyle, textStyle } = styles;

    return ( 
        <View style = { viewStyle }>
         <Text style={textStyle}>{props.title}</Text> 
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        height: 80,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
  });
  

export default Header;