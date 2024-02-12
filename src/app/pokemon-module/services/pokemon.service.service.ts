import { observable } from './../../../../node_modules/rxjs/src/internal/symbol/observable';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.character.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

    private url_pokemon_list:string ='https://pokeapi.co/api/v2/pokemon/'

    public pokemonCharacters: Pokemon[] =[]

    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ){}

    /** Log a PokemonApp message with the MessageService */
    private log(message: string) {
      this.messageService.addMessage(`PokemonApp: ${message}`);
    }

    public getPokemonById( pokemonId:Number ):Observable<Pokemon>{
      return this.http.get<Pokemon>(this.url_pokemon_list+pokemonId+'/')
    }

    public getAllPokemonsBasic():void{
      for (let i = 1; i < 5; i++) {
        this.getPokemonById(i).subscribe(
          (data)=>{
            let pokemon:Pokemon ={id: data.id,name: data.name,sprites:data.sprites}
            this.pokemonCharacters.push(pokemon)
          },
          error => {
            console.error('There was an error!', error);
          }
        )
      }
    }
}
