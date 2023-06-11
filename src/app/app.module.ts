import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
  Routes,
} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const routes: Routes = [
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then((m) => m.PlanModule),
  },
  {
    path: 'meal',
    loadChildren: () => import('./meal/meal.module').then((m) => m.MealModule),
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then((m) => m.BuyModule),
  },
  {
    path: '',
    redirectTo: 'plan',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
