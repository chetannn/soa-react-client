import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    let token = localStorage.getItem('access_token') || null;
    if (token !== null) {
      let decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setUserDetail(decodedToken);
    }
    else {
      setMessage('Unauthorized Access')
    }
  }, []);

  const renderUserDetail = () => {
    if(!userDetail) {
    return <h1>{message}</h1>
    }
    return (
      <Card>
      <CardHeader title="User Detail"></CardHeader>
      <CardContent>
        <h3>Username: {userDetail.username}</h3>
        <h3>Role: {userDetail.role}</h3>
        <h3>Name: {userDetail.name_en}</h3>
      </CardContent>
    </Card>
    );
  }
  return renderUserDetail()
};

export default UserDetail;
