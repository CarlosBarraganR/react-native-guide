import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';

class Content extends Component { 
    render() {
        return (
            <View>
                { 
                    this.props.expanded
                    ? <Text>{this.props.library.description}</Text> 
                    : null 
                }
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }

}

export default connect(mapStateToProps)(Content);