export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

export interface Genre {
  id: number
  name: string
  slug: string
  image_background: string
}

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface FetchResponse {
  count: number
  next: string
  previous: string
}

export interface FetchGamesResponse extends FetchResponse {
  results: Game[]
}

export interface FetchGenresResponse extends FetchResponse {
  results: Genre[]
}

export interface FetchPlatformsResponse extends FetchResponse {
  results: Platform[]
}
