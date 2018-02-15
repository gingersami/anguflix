import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Movie from './Movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  collection: Movie[]
  @Input() chosenMovie: Movie;
  @Output() removedMovie: EventEmitter<Movie> = new EventEmitter();


  constructor(private movieservice: MovieService) { }

  ngOnInit() {
    this.getCollection()
  }

  purchaseMovie(movie: Movie) {
    if (this.movieservice.budget < movie.price) {

    } else {

    this.movieservice.PurchaseMovie(movie);
    this.removedMovie.emit(movie);
    }

  }
  getCollection(){
    this.collection = this.movieservice.getCollection()
  }

}
