import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goals';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail-component.component.html',
  styleUrls: ['./goal-detail-component.component.css']
})
export class GoalDetailComponentComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
