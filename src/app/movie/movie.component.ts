import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import Movie from '../models/Movie';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  collection: any[];
  @Input() chosenMovie;
  @Output() removedMovie: EventEmitter<Movie> = new EventEmitter();
  mouseOver:boolean;

  constructor(private movieservice: MovieService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getCollection()
  }



  purchaseMovie(movie: Movie) {
    if (this.movieservice.user.budget < movie.price) {

    } else {

    this.movieservice.PurchaseMovie(movie);
    this.removedMovie.emit(movie);
    }

  }
  getCollection(){
    this.collection = this.movieservice.getCollection();
  }

  @HostListener('mouseover')

  onMouseOver(){
    this.mouseOver= true
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.mouseOver=false
  }

  getMoreInfo(){

  }
}
