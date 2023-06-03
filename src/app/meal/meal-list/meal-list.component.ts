import { Component } from '@angular/core';
import { MealService } from '../../shared/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent {
  constructor(readonly mealService: MealService) {}
}
