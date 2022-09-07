import Header from './components/Header'
import Board from './components/Board'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import reSortArray from './randomArray';
import GameWon from './components/GameWon';

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

  useEffect(()=> {
    setAnimes(reSortArray(animes));
    if (currentScore > bestScore) setBestScore(currentScore);
    if (currentScore === maxScore) setGameOver(true);
  },[currentScore]) //everytime currentSCore changes, the array is resorted. 

  const handleClick = card => {
    if (!card.isClicked) {  // receives a card and if isClicked=false, means that we clicked the firs time. Run setAnimes
      setAnimes(animes.map(anime=> anime.id ===card.id?{...anime, isClicked:true}: anime)) //changes the App isClicked of the clicked anime. 

        setCurrentScore(currentScore + 1 ) 
    }
    if (card.isClicked){ //reset game if isClicked=true (you lost)
      resetGame()
    }
  }
  
const resetGame = () =>{
  addIsClicked(animes)
  setCurrentScore(0)
  setGameOver(false);
}
  return (
    <div className="App">
     <Header/>
     
     <p className="current-score">Current Score: {currentScore}, Best Score: {bestScore}</p>
    <div className='game'><Board animes={animes} handleClick={handleClick}/></div>
    <GameWon gameOver={gameOver} resetGame={resetGame}/>
    </div>
  );
}

export default App;
