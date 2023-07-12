import { PlanService } from './plan.service';
import { MealService } from './meal.service';
import { waitForAsync } from '@angular/core/testing';
import { take } from 'rxjs';

describe('PlanService', () => {
  let planService: PlanService;
  beforeEach(() => {
    planService = new PlanService(new MealService());
  });

  it('should be empty initially', waitForAsync(() => {
    planService.get$().subscribe((plan) => expect(plan).toHaveLength(0));
    planService.isEmpty$().subscribe((isEmpty) => expect(isEmpty).toBe(true));
  }));

  it('should generate plan of 4 distinct meals', waitForAsync(() => {
    planService.regenerate();

    planService.get$().subscribe((plan) => {
      expect(plan).toHaveLength(4);
      let mealIds = new Set<number>(plan.map((planItem) => planItem.mealId));
      expect(mealIds.size).toBe(4);
    });
    planService.isEmpty$().subscribe((isEmpty) => expect(isEmpty).toBe(false));
  }));

  it('should keep pinned meals on regenerate', waitForAsync(() => {
    planService.regenerate();
    planService
      .get$()
      .pipe(take(1))
      .subscribe((initialPlan) => {
        expect(initialPlan).toHaveLength(4);
        initialPlan[0].pinned = true;
        initialPlan[1].pinned = true;

        planService.regenerate();
        planService.get$().subscribe((newPlan) => {
          expect(newPlan).toHaveLength(4);
          expect(initialPlan[0].mealId).toBe(newPlan[0].mealId);
          expect(initialPlan[1].mealId).toBe(newPlan[1].mealId);
        });
      });
  }));
});
