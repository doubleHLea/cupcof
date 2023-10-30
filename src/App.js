import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import MapPage from './components/Map/MapPage';
import './index.css';
import UserContainer from './components/My-List/UserContainer';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/map' element={<MapPage />} />
          <Route path='/user' element={<UserContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
