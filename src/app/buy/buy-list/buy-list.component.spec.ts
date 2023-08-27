import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuyListComponent } from './buy-list.component';
import { IonicModule, IonList } from '@ionic/angular';
import { PlanService } from '../../plan.service';
import { MealService } from '../../meal.service';
import { By } from '@angular/platform-browser';

describe('BuyListComponent', () => {
  let component: BuyListComponent;
  let fixture: ComponentFixture<BuyListComponent>;
  let mealServiceMock = new MealService();
  let planServiceMock = new PlanService(mealServiceMock);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule],
      declarations: [BuyListComponent],
      providers: [
        { provide: PlanService, useValue: planServiceMock },
        { provide: MealService, useValue: mealServiceMock },
      ],
    });
    fixture = TestBed.createComponent(BuyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty list if plan is empty', () => {
    expect(component).toBeTruthy();
    const emptyBuyListElement =
      fixture.debugElement.nativeElement.querySelector('#emptyBuyList');
    expect(emptyBuyListElement).toBeTruthy();
  });

  it('should have empty list if plan is empty', waitForAsync(() => {
    expect(component).toBeTruthy();
    planServiceMock.regenerate();
    fixture.detectChanges();

    const emptyBuyListElement =
      fixture.debugElement.nativeElement.querySelector('#emptyBuyList');
    expect(emptyBuyListElement).toBeFalsy();
    const listElement = fixture.debugElement.queryAll(By.directive(IonList));
    expect(listElement.length).toBe(4);
  }));
});
