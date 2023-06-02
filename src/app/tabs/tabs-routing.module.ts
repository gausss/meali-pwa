import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'plan',
        loadChildren: () => import('../plan/plan.module').then(m => m.PlanModule)
      },
      {
        path: 'meal',
        loadChildren: () => import('../meal/meal.module').then(m => m.MealModule)
      },
      {
        path: 'buy',
        loadChildren: () => import('../buy/buy.module').then(m => m.BuyModule)
      },
      {
        path: '',
        redirectTo: '/tabs/plan',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/plan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
