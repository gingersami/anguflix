import {Component, OnInit, OnChanges, Output, EventEmitter, Input} from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, OnChanges, Output {
  budget: number;
  @Output() budgetChanged: EventEmitter<number> = new EventEmitter();


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.budget = this.movieService.getBudget();

  }


  ngOnChanges($event) {
    console.log($event);
    this.budgetChanged.emit(this.budget);
  }



}
