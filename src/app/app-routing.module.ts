import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'movies',component:UserDetailsComponent},
  {path:'view/:id',component:DetailsComponent},
  {path:'search/:id',component:SearchComponent},
  {path:'favourites',component:FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routingComponents = [UserDetailsComponent,DetailsComponent,FavouritesComponent,DashboardComponent,SearchComponent]
