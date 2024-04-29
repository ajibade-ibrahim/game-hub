import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { Platform } from '../models.ts/models'
import GamesService from '../services/GamesService'

const usePlatforms = () => {
  // State variables
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const platformsData = await GamesService.getPlatforms()
        setPlatforms(platformsData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching games:', error)
        setError((error as AxiosError).message)
        setIsLoading(false)
      }
    }

    fetchPlatforms()
  }, [])

  return { platforms, error, isLoading }
}

export default usePlatforms
