import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';
import { LIST_ROCKETS } from './redux/Rockets/rocket';
<<<<<<< HEAD
=======
import Mission from './pages/Mission';
>>>>>>> f7e3ee9e72812c90a4e509bd2efc8e7a0c49374d
import Profile from './pages/Profile';
import RocketList from './pages/RocketList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LIST_ROCKETS());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketList />} />
<<<<<<< HEAD
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation';
import Mission from './pages/Mission';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
=======
>>>>>>> f7e3ee9e72812c90a4e509bd2efc8e7a0c49374d
        <Route path="mission" element={<Mission />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
