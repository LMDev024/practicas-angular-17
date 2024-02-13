import {Component} from '@angular/core';

import { loadSprite } from './../../helpers/helper-functions';
import { getPokemonId } from '../../helpers/helper-functions';
import { PokemonServiceService } from '../../services/pokemon.service.service';
import { Pokemon} from '../../interfaces/pokemon.character.interface';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {

  public pokemonCharacters:Pokemon[]=[];
  public nextPage:string=''
  public previousPage:string=''

  constructor(
    public pokemonService: PokemonServiceService
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

}
