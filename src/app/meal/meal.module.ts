import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal-list/meal-list.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MealItemComponent } from './meal-item/meal-item.component';
import { MissingMandatoryFieldsPipe } from '../shared/mandatory-fields-pipe.pipe';

@NgModule({
  declarations: [MealListComponent, MealItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: MealItemComponent,
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: MealItemComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        component: MealListComponent,
      },
    ]),
    IonicModule,
    MissingMandatoryFieldsPipe,
  ],
})
export class MealModule {}
