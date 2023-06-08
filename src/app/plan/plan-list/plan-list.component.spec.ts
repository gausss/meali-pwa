import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanListComponent } from './plan-list.component';
import { IonicModule } from '@ionic/angular';

describe('PlanListComponent', () => {
  let component: PlanListComponent;
  let fixture: ComponentFixture<PlanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule],
      declarations: [PlanListComponent],
    });
    fixture = TestBed.createComponent(PlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
