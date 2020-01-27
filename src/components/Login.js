import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  CardHeader
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { AUTH_SERVER_URL } from '../config';

const Login = (props) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [loginState, setLoginState] = useState(false);

  const submitForm = () => {
    let user = {
      client_id: 1,
      username,
      password
    };
    axios({
      url: AUTH_SERVER_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(user)
    }).then(res => {
      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
      setLoginState(true);
      props.history.push('/employees');
    });
  };

  return (
    <Card>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        {loginState && <Alert>Login Success</Alert>}
        <TextField
          value={username}
          fullWidth
          variant="outlined"
          label="Username"
          style={{ marginTop: '20px' }}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          style={{ marginTop: '20px' }}
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </CardContent>

      <CardActions>
        <Router>
          <Button
            onClick={submitForm}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Router>
      </CardActions>
    </Card>
  );
};

export default Login;
