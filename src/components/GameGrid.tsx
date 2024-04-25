import React from 'react'

import useGames from '../hooks/useGames'

const GameGrid: React.FC = () => {
  const { games, error } = useGames()

  return (
    <div>
      <h1>Game Grid</h1>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GameGrid
