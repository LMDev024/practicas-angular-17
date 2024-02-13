export interface ApiResultPokemonCharacter {
  count: number
  next: string
  previous: string
  results: PokemonApi[]
}

export interface PokemonApi {
  name: string
  url: string
}
