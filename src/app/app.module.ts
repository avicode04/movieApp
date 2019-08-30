import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'


import { GdetailsService} from './gdetails.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {path:'search/:query', component:SearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    FilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
