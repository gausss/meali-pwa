import { Component } from '@angular/core';
import { Meal } from '../meal.model';
import { MealService } from '../../shared/meal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {
  meal: Meal | undefined;

  constructor(
    private readonly mealService: MealService,
    activatedRoute: ActivatedRoute
  ) {
    const mealId = parseInt(activatedRoute.snapshot.params['id']);
    this.meal = this.mealService.get(mealId);
  }
}
