import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BuyListComponent} from './buy-list.component';
import {IonicModule} from "@ionic/angular";

describe('BuyListComponent', () => {
  let component: BuyListComponent;
  let fixture: ComponentFixture<BuyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule],
      declarations: [BuyListComponent],
    });
    fixture = TestBed.createComponent(BuyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
