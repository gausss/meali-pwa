import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  RouterTestingModule
} from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { MandatoryFieldsPipe } from '../mandatory-fields-pipe.pipe';
import { MealListComponent } from './meal-list.component';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule, RouterTestingModule, MandatoryFieldsPipe],
      declarations: [MealListComponent],
    });
    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
