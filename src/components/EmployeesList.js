import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import Card from '../components/common/Card/Card';

class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeeFetch();
    }

    render(){
        console.log(this.props.employees);
        return (
            <View style={styles.listContainer}>
                    <FlatList
                        data={this.props.employees}
                        renderItem={({item}) => <Text style={styles.item}>{console.log(item.name)}</Text>}
                    />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        padding: 10,
        fontSize: 16,
    }
});

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, { employeeFetch } )(EmployeeList);
