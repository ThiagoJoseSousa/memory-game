import Header from './components/Header'
import Board from './components/Board'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App=()=> {
  
  return (
    <div className="App">
     <Header/>
     <Board />
    </div>
  );
}

export default App;
