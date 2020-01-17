import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardHeader,
  CardMedia,
  Grid
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { API_SERVER_URL } from '../config';


const useStyles = makeStyles({
  containerStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const EmployeeList = () => {
  let [employees, setEmployees] = useState(null);
  let [message, setMessage] = useState('Loading...');
  const classes = useStyles();

  const renderEmployees = () => {
    if (employees) {
      {
        return employees.map((employee, index) => (
          <Card style={{ margin: '1rem', maxWidth: 345 }} key={employee.id}>
            <CardActionArea>
              <CardMedia
                style={{ height: 200 }}
                image={`http://pis.shangrilagroup.com.np/${employee.photo_path}`}
              />
              <CardContent>
                <p>{employee.full_name_np}</p>
                <p>{employee.current_office_name}</p>
                <p>{employee.position_name}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        ));
      }
    } else {
      return <h1>{message}</h1>;
    }
  };

  useEffect(() => {
    const getEmployeeList = async () => {
      console.log('this function has been called');
      let token = localStorage.getItem('access_token') || null;

      try {
        const result = await axios({
          url: API_SERVER_URL,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        });
        setEmployees(result.data);
      } catch (error) {
        if (error.response.status == 401) setMessage('UnAuthroized Access');
      }
    };
    getEmployeeList();
  }, []);

  return <div>{renderEmployees()}</div>;
};

const style = {
  containerStyle: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

export default EmployeeList;
