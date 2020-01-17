import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  CardHeader
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from './Router';

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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
