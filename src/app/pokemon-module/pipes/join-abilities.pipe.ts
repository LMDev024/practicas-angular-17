import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from '../interfaces/pokemon.data.character.interface';

@Pipe({
  name: 'joinAbilities'
})
export class JoinAbilitiesPipe implements PipeTransform {
 
  transform(value:Ability[]): string {
    console.log(value); 
    if( !value || value.length === 0 ){
      return '';
    }

    return value.map( item=>item.ability.name).join(', ');

  }

}
