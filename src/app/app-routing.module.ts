import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerriesComponent } from './berries/berries.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
  path:"",
  component: NavBarComponent,
  children:[
    {
      path : "home",
      component: HomeComponent,
    },
    {
      path:"berries",
      component: BerriesComponent,
    },
    
    ]  
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
