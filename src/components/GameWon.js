import React from 'react'

const GameWon= ({gameOver,resetGame}) => {
    return gameOver? (<div className='win-message'><p>Congrats! You remember things well!</p><br/>
    <button onClick={resetGame}>Play Again</button></div>) : null
}

export default GameWon;