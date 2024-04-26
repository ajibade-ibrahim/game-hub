import { useEffect, useState } from 'react'

import GenresService, { Genre } from '../services/GenresService'

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await GenresService.getGenres()
        setGenres(genres)
      } catch (error) {
        // Handle error
        console.error('Failed to fetch genres:', error)
      }
    }

    fetchGenres()
  }, [])

  return genres
}

export default useGenres
