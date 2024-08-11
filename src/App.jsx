import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import HomePage from './HomePage';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
