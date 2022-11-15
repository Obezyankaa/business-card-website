/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Header from './Components/Header/Header';
// тест gitHub sdfsfsfs
// sfsdfsfssdfsdfsfssf
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
