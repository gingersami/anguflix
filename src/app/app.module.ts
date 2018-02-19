import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {MovieService} from './movie.service';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { BudgetComponent } from './budget/budget.component';
import { FilterPipe } from './filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    AllMoviesComponent,
    SearchComponent,
    MovieComponent,
    BudgetComponent,
    FilterPipe,
    HomeComponent,
    SingleMovieComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
