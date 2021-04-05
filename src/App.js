import './App.css';
import React from 'react';
import NavigationBar from './components/views/NavigationBar';
import AllServices from './components/views/AllServices';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <AllServices />
    </React.Fragment>
  );
};

export default App;
