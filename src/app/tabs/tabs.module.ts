import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'plan',
        loadChildren: () =>
          import('../plan/plan.module').then((m) => m.PlanModule),
      },
      {
        path: 'meal',
        loadChildren: () =>
          import('../meal/meal.module').then((m) => m.MealModule),
      },
      {
        path: 'buy',
        loadChildren: () =>
          import('../buy/buy.module').then((m) => m.BuyModule),
      },
      {
        path: '',
        redirectTo: '/tabs/plan',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/plan',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
