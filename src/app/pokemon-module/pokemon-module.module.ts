import { Form } from './interfaces/pokemon.data.character.interface';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
import { PokemonFooterComponent } from './components/pokemon-footer/pokemon-footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { JoinTypesPipe } from './pipes/join-types.pipe';
import { JoinAbilitiesPipe } from './pipes/join-abilities.pipe';


@NgModule({
  declarations: [
    MainPageComponent,
    PokemonHeaderComponent,
    PokemonFooterComponent,
    PokemonListComponent,
    JoinTypesPipe,
    JoinAbilitiesPipe,

  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModuleModule { }
