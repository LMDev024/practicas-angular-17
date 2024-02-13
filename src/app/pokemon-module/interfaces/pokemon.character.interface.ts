
export interface Pokemon{
  id:Number,
  name:string,
  sprite:Sprite
}
export interface Sprite{
  back_default?:string
  back_shiny?:string
  front_default?:string
  front_shiny?:string
}
