import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerriesComponent } from './berries/berries.component';
import { RoutingGuard } from './guards/routing.guard';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
  path:"",
  component: NavBarComponent,
  canActivate:[RoutingGuard],
  children:[
    {
      path : "home",
      component: HomeComponent,
    },
    {
      path:"berries",
      component: BerriesComponent,
    },
    {
      path:"items",
      component: ItemsComponent,
    },
    ]  
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
