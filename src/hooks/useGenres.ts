import { useEffect, useState } from 'react'

import { Genre } from '../models.ts/models'
import GamesService from '../services/GamesService'

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await GamesService.getGenres()
        setGenres(genres)
        setIsLoading(false)
      } catch (error) {
        // Handle error
        console.error('Failed to fetch genres:', error)
        setIsLoading(false)
      }
    }

    fetchGenres()
  }, [])

  return { genres, isLoading }
}

export default useGenres
