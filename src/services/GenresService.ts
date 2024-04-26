import { AxiosError } from 'axios'

import apiClient from './api-client'

export interface Genre {
  id: number
  name: string
  slug: string
  image_background: string
}

export interface FetchGenresResponse {
  count: number
  next: string
  previous: string
  results: Genre[]
}

class GenresService {
  private static instance: GenresService | null = null
  private readonly endpoint: string = '/genres'

  private constructor() {}

  static getInstance(): GenresService {
    if (!GenresService.instance) {
      GenresService.instance = new GenresService()
    }
    return GenresService.instance
  }

  async getGenres(): Promise<Genre[]> {
    // Replace 'any' with the actual type of the response
    try {
      const response = await apiClient.get<FetchGenresResponse>(this.endpoint)
      return response.data.results
    } catch (error) {
      console.error('Error retrieving genres:', error)
      throw new Error(
        `Failed to retrieve genres: ${(error as AxiosError).message}`
      )
    }
  }
}

export default GenresService.getInstance()
