import React, { Component } from 'react';
import { View, Text, Button, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Card from '../components/common/Card/Card';
import CardSection from '../components/common/CardSection/CardSection';
import Input from '../components/common/Input/Input';

class EmployeeCreate extends Component {

    createEmployee(){
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'monday'})

    }

    render(){
        return(
            <View>
                <Card>
                    <CardSection>
                        <Input 
                            label="Name" 
                            placeholder="Full Name"
                            value={this.props.name}
                            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}/>
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Phone"
                            placeholder="555-555-5555"
                            value={this.props.phone}
                            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}/>
                    </CardSection>

                    <CardSection style={{ flex: 1 }}>
                        <Text style={{ flex: 1, marginLeft: 10, marginTop: 5, fontSize: 16 }}>Shift</Text>
                        <Picker
                            style={{ flex: 2 }}
                            selectedValue={this.props.shift}
                            onValueChange={itemValue => this.props.employeeUpdate({ prop: 'shift', value: itemValue })}>
                            <Picker.Item label="Monday" value="monday" />
                            <Picker.Item label="Tuesday" value="tuesday" />
                            <Picker.Item label="Wendsday" value="wendsday" />
                            <Picker.Item label="Thursday" value="thursday" />
                            <Picker.Item label="Friday" value="friday" />
                            <Picker.Item label="Saturday" value="saturday" />
                            <Picker.Item label="Sunday" value="sunday" />
                        </Picker>
                    </CardSection>

                    <CardSection>
                        <Button 
                            title="Create"
                            onPress={this.createEmployee.bind(this)}/>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.employee.name,
        phone: state.employee.phone,
        shift: state.employee.shift
    }
}

export default connect(mapStateToProps, actions)(EmployeeCreate);