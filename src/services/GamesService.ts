import apiClient from './api-client'

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface FetchGamesResponse {
  count: number
  next: string
  previous: string
  results: Game[]
}

class GamesService {
  getGames(genreIds: string | null): Promise<Game[]> {
    const params: Record<string, string> = {}
    if (genreIds) {
      params.genres = genreIds
    }

    return apiClient
      .get<FetchGamesResponse>('/games', { params })
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
      .get<FetchGamesResponse>('/games', {
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
}

export default new GamesService()
