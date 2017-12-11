import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { connect } from 'react-redux';

class LibraryList extends Component {
    render(){
        console.log(this.props);
        return(
            <View style={styles.container}>
                {/* New React Way to Declare a List */}
                <FlatList
                    data={this.props.libraries}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => <Text style={styles.item}>{item.id+1}. {item.title}</Text>}
                />
            </View>
        );
    }

}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});

export default connect(mapStateToProps)(LibraryList);