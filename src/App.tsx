import React, { ChangeEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import {options} from './components/Dropdown'

import Slider from "@mui/material/Slider";

import Select from "react-select"

const options = [
  { label: "Sine", value: 1 },
  { label: "Square", value: 2 },
  { label: "Sawtooth", value: 3 },
  { label: "Triangle", value: 4 },
  { label: "Random", value: 5 },
];

function App() {

  const [rate, setRate] = useState('');

  return (
    <body>
    <h1>Waves</h1>
    <div className="wave1">
      <h2>Wave 1</h2>
      <Select options={options} />
      <Slider aria-label="Rate" value={rate} onChange={e => setRate<HTMLInputElement>(event.target.value)} />
      rate
      amp
      phase
    </div>
    
    <div className="wave2">
      <h2>Wave 2</h2>
      <Select options={options} />
      rate
      amp
      phase
    </div>

    <div className='wave3'>
      <h2>Wave Combo</h2>
    </div>
  </body>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <div className="wave1">Wave 1</div>
//        <div>
//        </div>
//        <div className="wave2">Wave 2</div>
//        <div className="waveCombo">Wave Combo</div> 
//       </header>
//     </div>
//   );
// }

