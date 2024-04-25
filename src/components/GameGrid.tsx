import React from 'react'

import useGames from '../hooks/useGames'
import { SimpleGrid } from '@chakra-ui/react'
import GameCard from './GameCard'

const GameGrid: React.FC = () => {
  const { games, error } = useGames()

  return (
    <div>
      <h1>Game Grid</h1>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default GameGrid
