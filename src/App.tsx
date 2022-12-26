import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <>
      <Router>
          <Routes>
              {/* <PrivateRoute exact path='/' component={LoginPage}/> */}
              <Route path="/" element={<LoginPage/>} />
              <Route path="/home" element={<HomePage/>} />
              <Route path="/register" element={<RegisterPage/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
