import { PokemonCharacterData } from './../../interfaces/pokemon.data.character.interface';
import {Component} from '@angular/core';

import { loadSprite, createEmptyPokemonCharacter } from './../../helpers/helper-functions';
import { getPokemonId } from '../../helpers/helper-functions';
import { PokemonServiceService } from '../../services/pokemon.service.service';
import { Pokemon} from '../../interfaces/pokemon.character.interface';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {


  public isPokemonSearched:boolean = false;
  public pokemonCharacters:Pokemon[]=[];
  public pokemonSearchName: string = ''
  public pokemonSearched: PokemonCharacterData = createEmptyPokemonCharacter()


  public nextPage:string=''
  public previousPage:string=''

  constructor(
    public pokemonService: PokemonServiceService,

  ){}

     ngOnInit(){
       this.loadPokemons()
     }

    public loadPokemons(url?:string){
        this.pokemonService.getPokemons(url).subscribe({
          next: (data)=>{
            let id
            this.pokemonCharacters = []
            data.results.forEach(pokemon=>{
              id = getPokemonId(pokemon.url)
              const pokemonData:Pokemon={
                id,
                name:pokemon.name,
                sprite: loadSprite(pokemon)
              }
              this.pokemonCharacters.push(pokemonData)
            })
            this.previousPage = data.previous;
            this.nextPage = data.next;
          },
          error:(error)=>{
            console.error('Error al cargar los personajes: ',error);
          }
        })
    }
    public searchPokemonByName(){
      console.log(this.pokemonSearchName)
      this.pokemonService.getPokemonByName(this.pokemonSearchName).subscribe({
        next: (data:PokemonCharacterData)=>{
          this.pokemonSearched = data
          this.isPokemonSearched = true
          if(data === undefined || !(data && 'name' in data)  ) this.isPokemonSearched = false
        },
        error:(error)=>{
          
          console.error('Error al cargar el pokemon: ', error);
        }
      })
    }
}
