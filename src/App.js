import Header from './components/Header'
import Board from './components/Board'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import reSortArray from './randomArray';

const App=()=> {
   const [animes,setAnimes]=useState([]);
  const [currentScore,setCurrentScore] =useState(0);
  const [maxScore, setMaxScore] = useState(null);
  const [bestScore, setBestScore]=useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect (()=>{
    const fetchData = async () =>{
      try { /* data scoped here*/
        const {data} = await axios.get (
          'https://kitsu.io/api/edge/anime?filter[categories]=adventure'
        );  
        {/* console log is double evoked because of strict mode in index.js */}
        addIsClicked(data.data)
        setAnimes(reSortArray(data.data))
        setMaxScore(data.data.length)
      } catch (err){
        console.error(err.message)
      }
    
    }
fetchData(); {/*evoking on useEffect*/}

  },[])

  const addIsClicked= data=>{
    data.forEach(anime => (anime.isClicked=false))
  }
  
  return (
    <div className="App">
     <Header/>
     
    <div className='game'><Board animes={animes}/></div>
    </div>
  );
}

export default App;
