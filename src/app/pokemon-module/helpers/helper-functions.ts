import { Sprite } from "../interfaces/pokemon.character.interface";
import { PokemonApi } from "../interfaces/pokemon.response.interface";

    //TODO Llevar esto a un helper Function
    export const getPokemonId=(url:string):number=>{
        const parts = url.split('/'); // Divide la URL en partes
        const id = parts[parts.length - 2]; // Selecciona el penúltimo elemento
        return parseInt(id)
      }
    //TODO Llevar esto a un helper Function
    export const loadSprite=(dataCharacter:PokemonApi):Sprite=>{
        const id = getPokemonId(dataCharacter.url)
        const spriteBase:Sprite={
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+id+".png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/"+id+".png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+id+".png",
        }
        return spriteBase
      }