import { Injectable } from '@angular/core';
import { Goal } from '../goal/goal.component';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals
  }

  getGoal(id){
    for (let goal of Goal){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}
