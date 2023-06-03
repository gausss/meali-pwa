import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal-list/meal-list.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MealListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: MealListComponent,
      },
    ]),
    IonicModule,
  ],
})
export class MealModule {}
