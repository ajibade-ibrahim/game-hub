import { AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import GamesService, { Game } from '../services/GamesService'

const useGames = () => {
  // State variables
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await GamesService.getGames()
        setGames(gamesData)
      } catch (error) {
        console.error('Error fetching games:', error)
        setError((error as AxiosError).message)
      }
    }

    fetchGames()
  }, [])

  return { games, error }
}

export default useGames
