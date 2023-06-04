import { Component } from '@angular/core';
import { Meal } from '../meal.model';
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
      this.mealDraft.name = value;
    }
  }

  onDifficultyChange(event: Event) {
    const value = (event as SelectCustomEvent).detail.value;
    if (value) {
      this.mealDraft.difficulty = value;
    }
  }

  async onDelete() {
    if (this.mealDraft.id) {
      this.mealService.delete(this.mealDraft.id);
    }
    await this.router.navigate(['tabs/meal']);
  }

  async onCreate() {
    this.mealService.create(this.mealDraft as Meal);
    await this.router.navigate(['tabs/meal']);
  }
}
