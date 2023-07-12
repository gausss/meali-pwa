import { Injectable } from '@angular/core';
import { Meal } from './meal/meal.model';
import meals from './meal/meals-dummy.json';

@Injectable({ providedIn: 'root' })
export class MealService {
  private readonly storeKey = 'meali.meals';
  store: Map<number, Meal> = new Map();

  constructor() {
    this.initStore();
  }

  private initStore() {
    const storedData = localStorage.getItem(this.storeKey);
    if (storedData) {
      this.store = new Map(JSON.parse(storedData));
    } else {
      this.store = new Map(meals.map((meal) => [meal.id, meal as Meal]));
    }
  }

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

  create(meal: Meal) {
    const nextId: number = Math.max(...this.store.keys()) + 1;
    const createdMeal: Meal = {
      ...meal,
      id: nextId,
    };
    this.store.set(nextId, createdMeal);
    this.persist();
  }

  update(id: number, meal: Meal) {
    this.store.set(id, meal);
    this.persist();
  }

  delete(id: number) {
    this.store.delete(id);
    this.persist();
  }

  isEmpty(): boolean {
    return this.store.size == 0;
  }

  private persist() {
    localStorage.setItem(
      this.storeKey,
      JSON.stringify([...this.store.entries()])
    );
  }
}
