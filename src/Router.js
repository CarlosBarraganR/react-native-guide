import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeesList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Login" />
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;