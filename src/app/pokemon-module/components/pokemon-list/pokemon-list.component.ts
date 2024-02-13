import { Component,OnInit} from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon.service.service';
import { Pokemon, Sprite } from '../../interfaces/pokemon.character.interface';
import { PokemonApi } from '../../interfaces/pokemon.response.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
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

    //TODO Llevar esto a un helper Function
    private getPokemonId(url:string):number{
      const parts = url.split('/'); // Divide la URL en partes
      const id = parts[parts.length - 2]; // Selecciona el penúltimo elemento
      return parseInt(id)
    }
  //TODO Llevar esto a un helper Function
    private loadSprite(dataCharacter:PokemonApi):Sprite{
      const id = this.getPokemonId(dataCharacter.url)
      const spriteBase:Sprite={
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+id+".png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/"+id+".png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+id+".png",
      }

      return spriteBase
    }

    public loadPokemons(url?:string){
      console.log('consultando: ',url)

        this.pokemonService.getPokemons(url).subscribe({
          next: (data)=>{
            let id
            this.pokemonCharacters = []
            data.results.forEach(pokemon=>{
              id = this.getPokemonId(pokemon.url)
              const pokemonData:Pokemon={
                id,
                name:pokemon.name,
                sprite: this.loadSprite(pokemon)
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
