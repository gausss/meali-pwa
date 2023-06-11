import { Component } from '@angular/core';
import { Ingredient, Meal } from '../meal.model';
import { MealService } from '../../shared/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputCustomEvent, SelectCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {
  mealDraft: Partial<Meal>;
  currentIngredient: Partial<Ingredient> = {};

  constructor(
    private readonly mealService: MealService,
    private readonly router: Router,
    activatedRoute: ActivatedRoute
  ) {
    const mealId = parseInt(activatedRoute.snapshot.params['id']);
    this.mealDraft = this.mealService.get(mealId) || ({} as Partial<Meal>);
  }

  onNameChange(event: Event) {
    const value = (event as InputCustomEvent).detail.value;
    if (value) {
      this.mealDraft = { ...this.mealDraft, name: value };
    } else {
      this.mealDraft = { ...this.mealDraft, name: undefined };
    }
  }

  onDifficultyChange(event: Event) {
    const value = (event as SelectCustomEvent).detail.value;
    if (value) {
      this.mealDraft = { ...this.mealDraft, difficulty: value };
    } else {
      this.mealDraft = { ...this.mealDraft, difficulty: undefined };
    }
  }

  async onDelete() {
    if (this.mealDraft.id) {
      this.mealService.delete(this.mealDraft.id);
    }
    await this.router.navigate(['meal']);
  }

  async onSave() {
    if (this.mealDraft.id) {
      this.mealService.update(this.mealDraft.id, this.mealDraft as Meal);
    } else {
      this.mealService.create(this.mealDraft as Meal);
    }
    await this.router.navigate(['meal']);
  }

  onIngredientNameChange(event: Event) {
    const value = (event as InputCustomEvent).detail.value;
    if (value) {
      this.currentIngredient = { ...this.currentIngredient, name: value };
    } else {
      this.currentIngredient = { ...this.currentIngredient, name: undefined };
    }
  }

  onAmountChange(event: Event) {
    const value = (event as InputCustomEvent).detail.value;
    if (value) {
      this.currentIngredient = {
        ...this.currentIngredient,
        amount: Number.parseInt(value),
      };
    } else {
      this.currentIngredient = { ...this.currentIngredient, amount: undefined };
    }
  }
  onUnitChange(event: Event) {
    const value = (event as SelectCustomEvent).detail.value;
    if (value) {
      this.currentIngredient = { ...this.currentIngredient, unit: value };
    } else {
      this.currentIngredient = { ...this.currentIngredient, unit: undefined };
    }
  }

  onAddIngredient() {
    this.mealDraft = {
      ...this.mealDraft,
      ingredients: [
        ...(this.mealDraft.ingredients || []),
        this.currentIngredient as Ingredient,
      ],
    };
  }

  onRemoveIngredient(index: number) {
    this.mealDraft.ingredients?.splice(index, 1);
  }
}
