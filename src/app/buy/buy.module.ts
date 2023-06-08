import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyListComponent } from './buy-list/buy-list.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BuyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: BuyListComponent,
      },
    ]),
    IonicModule,
  ],
})
export class BuyModule {}
