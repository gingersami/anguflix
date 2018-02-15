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


@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent,
    AllMoviesComponent,
    SearchComponent,
    MovieComponent,
    BudgetComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
