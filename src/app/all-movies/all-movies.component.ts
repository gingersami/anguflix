import {Component, OnInit, Input, HostListener} from '@angular/core';
import {MovieService} from '../movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies: any[]

  constructor(private movieservice: MovieService) { }

  ngOnInit() {
    return this.movieservice.getMovies()
      .subscribe(data => this.movies = data);

  }


  // movieRemoved(movie) {
  //  this.movies =  this.movieservice.removeMovie(movie);
  // }



}
