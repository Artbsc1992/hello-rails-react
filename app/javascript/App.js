import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greet from './Greet';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greet />} />
    </Routes>
  </BrowserRouter>
);

export default App;
