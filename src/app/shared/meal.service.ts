import { Injectable } from '@angular/core';
import { Meal } from '../meal/meal.model';
import meals from '../meal/meals-dummy.json';

@Injectable({ providedIn: 'root' })
export class MealService {
  store: Map<number, Meal>;

  constructor() {
    this.store = new Map(meals.map((meal) => [meal.id, meal as Meal]));
  }

  get(id: number | undefined): Meal | undefined {
    if (!id) {
      return undefined;
    }
    console.log(this.store);
    console.log(id);
    const matchedMeal = this.store.get(id);
    console.log(matchedMeal);
    return matchedMeal;
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
