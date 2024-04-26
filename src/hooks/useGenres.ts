import { useEffect, useState } from 'react'

import GenresService, { Genre } from '../services/GenresService'

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await GenresService.getGenres()
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
