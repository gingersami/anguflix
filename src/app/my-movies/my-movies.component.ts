import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(private movieservice: MovieService) { }
  movies: any[];

  ngOnInit() {
    this.movies = this.movieservice.getCollection();
  }


}
