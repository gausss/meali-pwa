import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanListComponent} from './plan-list/plan-list.component';
import {RouterModule} from '@angular/router';
import {PlanItemComponent} from './plan-item/plan-item.component';
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [PlanListComponent, PlanItemComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '**',
                component: PlanListComponent,
            },
        ]),
        IonicModule,
    ],
})
export class PlanModule {}
