import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';

class Content extends Component { 
    render() {
        return (
            <View>
                { 
                    this.props.selectedLibraryId === this.props.library.id 
                    ? <Text>{this.props.library.description}</Text> 
                    : null 
                }
            </View>
        );
    }
}

mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps)(Content);