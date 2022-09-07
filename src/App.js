import Header from './components/Header'
import Board from './components/Board'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import reSortArray from './randomArray';

const App=()=> {
   const [animes,setAnime]=useState([]);
  const [currentScore,setCurrentScore] =useState(0);

  useEffect (()=>{
    const fetchData = async () =>{
      try { /* data scoped here*/
        const {data} = await axios.get (
          'https://kitsu.io/api/edge/anime?filter[categories]=adventure'
        );  
        setAnime(reSortArray(data))
        addIsClicked(data); {/* console log is double evoked because of strict mode in index.js */}
      } catch (err){
        console.error(err.message)
      }
    
    }
fetchData(); {/*evoking on useEffect*/}

  },[])

  const addIsClicked= data=>{
    data.data.forEach(anime => (anime.isClicked=false))
  }
  
  return (
    <div className="App">
     <Header/>
    <div className='game'></div>
    </div>
  );
}

export default App;
