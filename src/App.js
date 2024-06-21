import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { composeWithDevTools } from "@redux-devtools/extension";
import Home from './components/Layout/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CandidateSearch from './components/Candidate/CandidateSearch';
import PrivateRoute from './components/Layout/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="App mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/candidates" element={<CandidateSearch />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
