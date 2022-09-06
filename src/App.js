import Header from './components/Header'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App=()=> {
  
  return (
    <div className="App">
     <Header/>
     <div className='game'></div>
    </div>
  );
}

export default App;
