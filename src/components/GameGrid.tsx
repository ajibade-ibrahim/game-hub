import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

interface GameGridProps {
  selectedGenreId: string | null
  selectedPlatformId: string | null
  sortOrder: string | null
}

const GameGrid: React.FC<GameGridProps> = ({
  selectedGenreId,
  selectedPlatformId,
  sortOrder,
}: GameGridProps) => {
  const { games, error, isLoading } = useGames(
    selectedGenreId,
    selectedPlatformId,
    sortOrder
  )
  const numbers = Array.from({ length: 6 }, (_, index) => index + 1)

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
        {isLoading
          ? numbers.map((number) => <GameCardSkeleton key={number} />)
          : games.map((game, index) => <GameCard key={index} game={game} />)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
