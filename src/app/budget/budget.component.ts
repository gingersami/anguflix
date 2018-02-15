import {Component, OnInit, OnChanges, Output, EventEmitter, Input} from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, OnChanges, Input {
  budget: number;
  @Output() budgetChanged: EventEmitter<number> = new EventEmitter();
  @Input() budget:number = this.budget;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.budget = this.movieService.getBudget();

  }


  ngOnChanges($event) {
    console.log($event);
    this.budgetChanged.emit(this.budget);
  }



}
