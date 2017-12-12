import React, { Component } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import {connect} from 'react-redux';
import CardSection from '../components/common/CardSection/CardSection';

class Content extends Component { 

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <CardSection>
                { 
                    this.props.expanded
                    ? <Text>{this.props.library.description}</Text> 
                    : null 
                }
            </CardSection>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }

}

export default connect(mapStateToProps)(Content);