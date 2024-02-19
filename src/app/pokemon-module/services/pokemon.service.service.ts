
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError,map,tap, Observable, of } from 'rxjs';
import { ApiResultPokemonCharacter } from '../interfaces/pokemon.response.interface';
import { PokemonCharacterData } from '../interfaces/pokemon.data.character.interface';


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

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error('catch error atrapó esto: ',error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


    public getPokemons(url?:string):Observable<ApiResultPokemonCharacter>{
      const apiUrl = url || 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=4/';

      return this.http.get<ApiResultPokemonCharacter>(apiUrl)
        .pipe(
          catchError(this.handleError<ApiResultPokemonCharacter>('getPokemons',{
            results: [], // Un array vacío como valor predeterminado para los resultados
            count: 0, // Suponiendo que tu interfaz tenga una propiedad count
            next: '', // Suponiendo que hay propiedades next y previous
            previous: ''
          }))
        )
    }

    public getPokemonByName(name:string):Observable<PokemonCharacterData>{
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'+name
      return this.http.get<PokemonCharacterData>(apiUrl)
        .pipe(
          catchError(this.handleError<PokemonCharacterData>('getPokemonByName'))
        )
    }
}
