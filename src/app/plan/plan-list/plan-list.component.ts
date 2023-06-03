import { Component } from '@angular/core';
import { MealService } from '../../shared/meal.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css'],
})
export class PlanListComponent {
  stored: string | null;

  constructor(readonly mealService: MealService) {
    this.stored = localStorage.getItem('plan');
  }

  generate() {
    localStorage.setItem('plan', 'Testplan');
  }
}
