import {Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChanges} from '@angular/core';
import {MovieService} from '../movie.service';
import User from '../models/User';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  user:User = new User()
  // budget: number;
  // @Output() budgetChanged: EventEmitter<number> = new EventEmitter();


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.user = this.movieService.getUser();

  }











}
