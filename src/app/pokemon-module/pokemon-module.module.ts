import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
import { PokemonFooterComponent } from './components/pokemon-footer/pokemon-footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PokemonHeaderComponent,
    PokemonFooterComponent,
    PokemonListComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModuleModule { }
