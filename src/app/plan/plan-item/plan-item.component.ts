import { Component, Input } from '@angular/core';
import { MealService } from '../../shared/meal.service';
import { Suggestion } from '../../shared/plan.service';

@Component({
  selector: 'plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css'],
})
export class PlanItemComponent {
  @Input() suggestion: Suggestion | undefined;

  constructor(readonly mealService: MealService) {}
}
