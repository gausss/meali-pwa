import { Injectable } from '@angular/core';
import { MealService } from './meal.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Suggestion {
  mealId: number;
  day: number;
}

@Injectable({ providedIn: 'root' })
export class PlanService {
  private readonly storeKey = 'meali.plan';
  storedPlan$ = new BehaviorSubject<Suggestion[]>([]);

  constructor(private readonly mealService: MealService) {
    this.initStore();
  }

  private initStore() {
    const storedData = localStorage.getItem(this.storeKey);
    if (storedData) {
      this.storedPlan$.next(JSON.parse(storedData));
    }
  }

  get$(): Observable<readonly Suggestion[]> {
    return this.storedPlan$;
  }

  isEmpty$(): Observable<boolean> {
    return this.storedPlan$.pipe(map((plan) => !Boolean(plan.length)));
  }

  regenerate() {
    this.storedPlan$.next(this.generate());
    localStorage.setItem(
      this.storeKey,
      JSON.stringify(this.storedPlan$.getValue())
    );
  }
  private generate(): Suggestion[] {
    const meals = this.mealService.getAllIds();
    const suggestions = new Set<number>();

    while (suggestions.size < Math.min(4, meals.length)) {
      const randomMealIndex = Math.floor(Math.random() * meals.length);
      const randomMealId = meals[randomMealIndex];
      suggestions.add(randomMealId);
    }

    return Array.from(suggestions).map((suggestion, index) => ({
      mealId: suggestion,
      day: index + 1,
    }));
  }
}
