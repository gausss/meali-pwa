import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListComponent } from './meal-list.component';
import { MealService } from '../../shared/meal.service';
import { IonicModule } from '@ionic/angular';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule],
      declarations: [MealListComponent],
      providers: [MealService],
    });
    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
