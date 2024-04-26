import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import GamesService, { Game } from '../services/GamesService'

const useGames = () => {
  // State variables
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await GamesService.getGames()
        setGames(gamesData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching games:', error)
        setError((error as AxiosError).message)
        setIsLoading(false)
      }
    }

    fetchGames()
  }, [])

  return { games, error, isLoading }
}

export default useGames
