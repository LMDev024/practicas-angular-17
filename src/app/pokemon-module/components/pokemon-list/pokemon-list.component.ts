import { Component,OnInit} from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon.service.service';
import { Root } from '../../interfaces/pokemon.response.interface';
import { Pokemon } from '../../interfaces/pokemon.character.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  constructor(
    public pokemonService: PokemonServiceService
  ){}

    ngOnInit(){
      this.getPokemons()
    }

    public getPokemons():void{
      this.pokemonService.getAllPokemonsBasic()
      console.log(this.pokemonService.pokemonCharacters)
    }

}
