import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.character.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
    public pokemonCharacters: Pokemon[] =[
        {
          id:1,
          name:"charizard",
          sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        },
        {
          id:2,
          name:"pikachu",
          sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },
        {
          id:3,
          name:"bulbasaur",
          sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
    ]
}
