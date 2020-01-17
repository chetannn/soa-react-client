import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Users from './Users';
import EmployeeList from './EmployeeList';
import React, { useState } from 'react';

const AppRouter = () => {
  return (
    <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/users" exact component={Users} />
          <Route path="/employees" exact component={EmployeeList} />
        </Switch>
    </div>
  );
};
export default AppRouter;
