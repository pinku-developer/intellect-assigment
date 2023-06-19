import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircleSlider from './pages/circular-slider';
import PyramidScale from './pages/pyramid-slider';
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CircleSlider data-testid="circle-slider" />} />
          <Route path="/pyramid-scale" element={<PyramidScale data-testid="pyramid-scale" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
