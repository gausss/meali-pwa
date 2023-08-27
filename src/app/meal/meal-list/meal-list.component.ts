import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MealService } from '../../meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealListComponent {
  constructor(readonly mealService: MealService) {}
}
