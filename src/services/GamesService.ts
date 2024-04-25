import apiClient from './api-client'

export interface Game {
  id: number
  name: string
  background_image: string
}

export interface FetchGamesResponse {
  count: number
  next: string
  previous: string
  results: Game[]
}

class GamesService {
  getGames(): Promise<Game[]> {
    // TODO: Implement logic to fetch games from a data source using apiClient
    return apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => response.data.results)
      .catch((error) => {
        console.error('Error fetching games:', error)
        throw error
      })
  }
}

export default new GamesService()
