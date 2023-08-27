import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MealService } from '../../meal.service';
import { Suggestion } from '../../plan.service';

@Component({
  selector: 'plan-item',
  templateUrl: './plan-item.component.html',
  styleUrls: ['./plan-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanItemComponent {
  @Input() suggestion: Suggestion | undefined;

  constructor(readonly mealService: MealService) {}

  onPin() {
    if (this.suggestion) {
      this.suggestion.pinned = !this.suggestion.pinned;
    }
  }
}
