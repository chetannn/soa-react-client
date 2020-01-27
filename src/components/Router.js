import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import EmployeeList from './EmployeeList';
import UserDetail from './UserDetail';
import React from 'react';

const AppRouter = () => {
  return (
    <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/users" exact component={Users} />
          <Route path="/employees" exact component={EmployeeList} />
          <Route path="/user-detail" exact component={UserDetail} />
        </Switch>
    </div>
  );
};
export default AppRouter;
