import { Pipe, PipeTransform } from '@angular/core';
import { Type } from '../interfaces/pokemon.data.character.interface';

@Pipe({
  name: 'joinTypes'
})
export class JoinTypesPipe implements PipeTransform {

  transform(value: Type[]): string {
      if (!value || value.length === 0) {
        return '';
      }
      return value.map(item => item.type.name).join(', ');
  }

}
