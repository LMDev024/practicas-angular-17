import { observable } from './../../../../node_modules/rxjs/src/internal/symbol/observable';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.character.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { ApiResultPokemonCharacter } from '../interfaces/pokemon.response.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

    constructor(
      private http: HttpClient,
      private messageService: MessageService
    ){}

    /** Log a PokemonApp message with the MessageService */
    private log(message: string) {
      this.messageService.addMessage(`PokemonApp: ${message}`);
    }

    public getPokemons(url?:string):Observable<ApiResultPokemonCharacter>{
      const apiUrl = url || 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4';

      return this.http.get<ApiResultPokemonCharacter>(apiUrl);
    }

}
