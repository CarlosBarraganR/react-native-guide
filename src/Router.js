import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; 
import { employeeReset } from './actions';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeesList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component {

    componentWillMount(){
        console.log(this.props)
    }

    render(){
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene initial key="login" component={LoginForm} title="Login" />
                    </Scene>
                    
                    <Scene key="main">
                        <Scene 
                            initial
                            key="employeeList" 
                            component={EmployeeList} 
                            title="Employees" rightTitle="Add" 
                            onRight={() => {
                                this.props.employeeReset();
                                Actions.employeeCreate();
                            }}/>
                        <Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee" />
                    </Scene>
                </Scene>
            </Router>
        );
    }
};

export default connect(null, {employeeReset})(RouterComponent);