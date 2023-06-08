import { Component } from '@angular/core';
import { MealService } from '../../shared/meal.service';
import { PlanService } from 'src/app/shared/plan.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css'],
})
export class BuyListComponent {
  constructor(
    readonly mealService: MealService,
    readonly planService: PlanService
  ) {}
}
