import { Injectable } from '@angular/core';
import { Meal } from '../meal/meal.model';
import meals from '../meal/meals-dummy.json';

@Injectable({ providedIn: 'root' })
export class MealService {
  store: Map<number, Meal> = new Map(
    meals.map((meal) => [meal.id, meal as Meal])
  );

  constructor() {}

  get(id: number | undefined): Meal | undefined {
    if (!id) {
      return undefined;
    }
    return this.store.get(id);
  }

  getAllIds(): readonly number[] {
    return [...this.store.keys()];
  }

  getAll(): readonly Meal[] {
    return [...this.store.values()];
  }

  isEmpty(): boolean {
    return this.store.size == 0;
  }
}
