import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { employeeFetch, emailChanged } from '../actions';
import Card from '../components/common/Card/Card';

class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeeFetch();
    }

    render(){
        // console.log(this.props.employees);
        return (
            <View style={styles.listContainer}>
                    <FlatList
                        data={this.props.employees}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity onPress={() => Actions.employeeCreate()}>
                                    <Text style={styles.item}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        }}
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
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid };
    });

    return { employees };
}

export default connect(mapStateToProps, { employeeFetch } )(EmployeeList);
