import { Sprite } from "../interfaces/pokemon.character.interface";
import { PokemonCharacterData } from "../interfaces/pokemon.data.character.interface";
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

    export const createEmptyPokemonCharacter=():PokemonCharacterData=>{
      const data:PokemonCharacterData={abilities: [],
      base_experience: 0,
      cries: { latest: '', legacy: '' },
      forms: [],
      game_indices: [],
      height: 0,
      held_items: [],
      id: 0,
      is_default: false,
      location_area_encounters: '',
      moves: [],
      name: '',
      order: 0,
      past_abilities: [],
      past_types: [],
      species: { name: '', url: '' },
      sprites: {
        back_default: '',
        back_female: null,
        back_shiny: '',
        back_shiny_female: null,
        front_default: '',
        front_female: null,
        front_shiny: '',
        front_shiny_female: null,
        other: {
          dream_world: { front_default: '', front_female: null },
          home: { front_default: '', front_female: null, front_shiny: '', front_shiny_female: null },
          "official-artwork": { front_default: '', front_shiny: '' },
          showdown: {
            back_default: '',
            back_female: null,
            back_shiny: '',
            back_shiny_female: null,
            front_default: '',
            front_female: null,
            front_shiny: '',
            front_shiny_female: null,
          },
        },
        versions: {
          "generation-i": {
            "red-blue": {
              back_default: '',
              back_gray: '',
              back_transparent: '',
              front_default: '',
              front_gray: '',
              front_transparent: '',
            },
            yellow: {
              back_default: '',
              back_gray: '',
              back_transparent: '',
              front_default: '',
              front_gray: '',
              front_transparent: '',
            },
          },
          "generation-ii": {
            crystal: {
              back_default: '',
              back_shiny: '',
              back_shiny_transparent: '',
              back_transparent: '',
              front_default: '',
              front_shiny: '',
              front_shiny_transparent: '',
              front_transparent: '',
            },
            gold: {
              back_default: '',
              back_shiny: '',
              front_default: '',
              front_shiny: '',
              front_transparent: '',
            },
            silver: {
              back_default: '',
              back_shiny: '',
              front_default: '',
              front_shiny: '',
              front_transparent: '',
            },
          },
          "generation-iii": {
            emerald: {
              front_default: '',
              front_shiny: '',
            },
            "firered-leafgreen": {
              back_default: '',
              back_shiny: '',
              front_default: '',
              front_shiny: '',
            },
            "ruby-sapphire": {
              back_default: '',
              back_shiny: '',
              front_default: '',
              front_shiny: '',
            },
          },
          "generation-iv": {
            "diamond-pearl": {
              back_default: '',
              back_female: null,
              back_shiny: '',
              back_shiny_female: null,
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
            "heartgold-soulsilver": {
              back_default: '',
              back_female: null,
              back_shiny: '',
              back_shiny_female: null,
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
            platinum: {
              back_default: '',
              back_female: null,
              back_shiny: '',
              back_shiny_female: null,
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
          },
          "generation-v": {
            "black-white": {
              animated: {
                back_default: '',
                back_female: null,
                back_shiny: '',
                back_shiny_female: null,
                front_default: '',
                front_female: null,
                front_shiny: '',
                front_shiny_female: null,
              },
              back_default: '',
              back_female: null,
              back_shiny: '',
              back_shiny_female: null,
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
          },
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
            "x-y": {
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
          },
          "generation-vii": {
            icons: {
              front_default: '',
              front_female: null,
            },
            "ultra-sun-ultra-moon": {
              front_default: '',
              front_female: null,
              front_shiny: '',
              front_shiny_female: null,
            },
          },
          "generation-viii": {
            icons: {
              front_default: '',
              front_female: null,
            },
          },
        },
      },
      stats: [],
      types: [],
      weight: 0,
    }
      return  data
    }