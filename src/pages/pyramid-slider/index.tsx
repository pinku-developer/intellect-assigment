import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';


const PyramidScale = () => {
  const [selectedStep, setSelectedStep] = useState(2);

  return (
    <div className="pyramid-container">
      <h1 className='heading'>Low</h1>
      <div className="cover">
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
          viewBox="0 0 314 376" >

          <rect x="0" className="st0" width="314" height="376" />
          <g>
            <path onClick={() => setSelectedStep(4)} style={{fill: selectedStep >= 4 ? '#fff': '#799da9'}} d="M266,74.7H48c-16.6,0-30-13.4-30-30v-4c0-8.8,7.2-16,16-16h246c8.8,0,16,7.2,16,16v4
      C296,61.3,282.6,74.7,266,74.7z"/>
            <path onClick={() => setSelectedStep(3)} style={{fill: selectedStep >= 3 ? '#fff': '#799da9'}} d="M237,143.9H77c-16.6,0-30-13.4-30-30v-4c0-8.8,7.2-16,16-16h188c8.8,0,16,7.2,16,16v4
      C267,130.4,253.6,143.9,237,143.9z"/>
            <path onClick={() => setSelectedStep(2)} style={{fill: selectedStep >= 2 ? '#fff': '#799da9'}} d="M207,213H107c-16.6,0-30-13.4-30-30v-4c0-8.8,7.2-16,16-16h128c8.8,0,16,7.2,16,16v4
      C237,199.6,223.6,213,207,213z"/>
            <path onClick={() => setSelectedStep(1)} style={{fill: selectedStep >= 1 ? '#fff': '#799da9'}} d="M182,282.1h-50c-16.6,0-30-13.4-30-30v-4c0-8.8,7.2-16,16-16h78c8.8,0,16,7.2,16,16v4
      C212,268.7,198.6,282.1,182,282.1z"/>
            <path onClick={() => setSelectedStep(0)} style={{fill: selectedStep >= 0 ? '#fff': '#799da9'}} d="M144.5,342.9l-4.9-9c-7.4-13.7,0.2-32.6,13.1-32.6h8.5c12.9,0,20.5,18.9,13.1,32.6l-4.9,9
      C163.4,354.1,150.6,354.1,144.5,342.9z"/>
          </g>
        </svg>
      </div>
      <Link to="/" className='link'>Circular Scale</Link>
    </div>
  );
};

export default PyramidScale;
