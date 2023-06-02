import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListComponent } from './meal-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MealService } from '../meal.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

describe('MealListComponent', () => {
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
      ],
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
