import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModuleModule } from './pokemon-module/pokemon-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
