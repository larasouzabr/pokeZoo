import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PokeNamesComponent } from './components/poke-names/poke-names.component';
import { BerriesComponent } from './berries/berries.component';
import { FormsModule } from '@angular/forms';
import { getPokemonsService} from './services/getPokemons.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PokeNamesComponent,
    BerriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [getPokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
