export interface ApiResultPokemonCharacter {
  count: number
  next: string
  previous: any
  results: PokemonApi[]
}

export interface PokemonApi {
  name: string
  url: string
}
