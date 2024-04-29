import { AxiosError } from 'axios'

import {
  FetchGamesResponse,
  FetchGenresResponse,
  Game,
  Genre,
  Platform,
} from '../models.ts/models'
import apiClient from './api-client'

class GamesService {
  private gamesEndpoint = '/games'
  private genresEndpoint = '/genres'
  private platformsEndpoint = '/platforms/lists/parents'

  getGames(
    genreIds: string | null,
    platformIds: string | null
  ): Promise<Game[]> {
    const params: Record<string, string> = {}
    if (genreIds) {
      params.genres = genreIds
    }
    if (platformIds) {
      params.parent_platforms = platformIds
    }

    return apiClient
      .get<FetchGamesResponse>(this.gamesEndpoint, { params })
      .then((response) => {
        return response.data.results
      })
      .catch((error) => {
        console.error('Error fetching games:', error)
        throw error
      })
  }

  getGamesByGenre(id: number): Promise<Game[]> {
    return apiClient
      .get<FetchGamesResponse>(this.gamesEndpoint, {
        params: {
          genres: id,
        },
      })
      .then((response) => response.data.results)
      .catch((error) => {
        console.error('Error fetching games:', error)
        throw error
      })
  }

  async getGenres(): Promise<Genre[]> {
    try {
      const response = await apiClient.get<FetchGenresResponse>(
        this.genresEndpoint
      )
      return response.data.results
    } catch (error) {
      console.error('Error retrieving genres:', error)
      throw new Error(
        `Failed to retrieve genres: ${(error as AxiosError).message}`
      )
    }
  }

  async getPlatforms(): Promise<Platform[]> {
    try {
      const response = await apiClient.get<FetchGenresResponse>(
        this.platformsEndpoint
      )
      return response.data.results
    } catch (error) {
      console.error('Error retrieving genres:', error)
      throw new Error(
        `Failed to retrieve genres: ${(error as AxiosError).message}`
      )
    }
  }
}

export default new GamesService()
