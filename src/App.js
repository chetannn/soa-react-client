import React from 'react';
import './App.css';
import {
  Container
} from '@material-ui/core';
import Navbar from './components/Navbar';
import AppRouter from './components/Router';

function App(props) {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: '5rem' }}>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
