import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import GamesService, { Game } from '../services/GamesService'

const useGames = (selectedGenreId: string | null) => {
  // State variables
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGames = async (genreIds: string | null) => {
      try {
        const gamesData = await GamesService.getGames(genreIds)
        setGames(gamesData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching games:', error)
        setError((error as AxiosError).message)
        setIsLoading(false)
      }
    }

    fetchGames(selectedGenreId)
  }, [selectedGenreId])

  return { games, error, isLoading }
}

export default useGames
