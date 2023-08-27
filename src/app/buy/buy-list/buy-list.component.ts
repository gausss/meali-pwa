import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MealService } from '../../meal.service';
import { PlanService } from '../../plan.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyListComponent {
  constructor(
    readonly mealService: MealService,
    readonly planService: PlanService
  ) {}
}
