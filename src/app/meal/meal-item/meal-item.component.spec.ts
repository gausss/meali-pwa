import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealItemComponent } from './meal-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MandatoryFieldsPipe } from '../mandatory-fields-pipe.pipe';

describe('MealItemComponent', () => {
  let component: MealItemComponent;
  let fixture: ComponentFixture<MealItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MealItemComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        MandatoryFieldsPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MealItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
