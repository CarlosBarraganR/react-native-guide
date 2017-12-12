import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import * as actions from '../actions';
import Content from './Content';

class LibraryList extends Component {

    render() {
        //console.log(this.props);
        let itemTest;
        return (
            <View style={styles.container}>
                {/* New React Way to Declare a List */}
                <FlatList
                    data={this.props.libraries}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={styles.item} onPress={() => this.props.selectLibrary(item.id)}>
                            <Text style={styles.text}>{item.id + 1}. {item.title}</Text>
                            <Content library={item}/>
                        </TouchableOpacity>
                    );
                }}/>
            </View>
        );
    }

}

const mapStateToProps = state => {
    return { 
        libraries: state.libraries
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10
    },
    text: {
        fontSize: 18
    }
});

export default connect(mapStateToProps, actions)(LibraryList);