import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid: React.FC = () => {
  const { games, error, isLoading } = useGames()
  const numbers = Array.from({ length: 6 }, (_, index) => index + 1)

  return (
    <div>
      <h1>Game Grid</h1>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading
          ? numbers.map((number) => <GameCardSkeleton key={number} />)
          : games.map((game, index) => <GameCard key={index} game={game} />)}
      </SimpleGrid>
    </div>
  )
}

export default GameGrid
