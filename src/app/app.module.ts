import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PokeNamesComponent } from './components/poke-names/poke-names.component';
import { BerriesComponent } from './berries/berries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getPokemonsService} from './services/getPokemons.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { BerriesCardComponent } from './components/berries-card/berries-card.component';
import { ItemsComponent } from './items/items.component';
import { ItemsCardComponent } from './components/items-card/items-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './footer/footer.component';
import { PokeDetailsComponent } from './details/pokemon-details/poke-details/poke-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PokeNamesComponent,
    BerriesComponent,
    BerriesCardComponent,
    ItemsComponent,
    ItemsCardComponent,
    FooterComponent,
    PokeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    NgxSpinnerModule,
    Ng2SearchPipeModule,
  ],
  providers: [getPokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
