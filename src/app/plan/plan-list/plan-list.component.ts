import { Component } from '@angular/core';
import { MealService } from '../../meal.service';
import { PlanService } from '../../plan.service';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css'],
})
export class PlanListComponent {
  constructor(
    readonly mealService: MealService,
    readonly planService: PlanService
  ) {}

  generate() {
    this.planService.regenerate();
  }
}
