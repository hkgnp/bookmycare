import './App.css';
import React from 'react';
import NavigationBar from './components/views/NavigationBar';
import AllServices from './components/views/AllServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
  return (
    <Container fluid={true}>
      <NavigationBar />
      <AllServices />
    </Container>
  );
};

export default App;
