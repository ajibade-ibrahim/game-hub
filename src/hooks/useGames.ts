import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { Game } from '../models.ts/models'
import GamesService from '../services/GamesService'

const useGames = (
  selectedGenreId: string | null,
  selectedPlatformId: string | null
) => {
  // State variables
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGames = async (
      genreIds: string | null,
      platformIds: string | null
    ) => {
      try {
        const gamesData = await GamesService.getGames(genreIds, platformIds)
        setGames(gamesData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching games:', error)
        setError((error as AxiosError).message)
        setIsLoading(false)
      }
    }

    fetchGames(selectedGenreId, selectedPlatformId)
  }, [selectedGenreId, selectedPlatformId])

  return { games, error, isLoading }
}

export default useGames
