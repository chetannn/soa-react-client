import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          SOA JS Client
        </Typography>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/employees" color="inherit">
          Employees
        </Button>
        <Button component={Link} to="/user-detail" color="inherit">
          User Detail
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
