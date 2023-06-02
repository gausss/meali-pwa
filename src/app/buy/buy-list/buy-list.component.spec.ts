import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyListComponent } from './buy-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('BuyListComponent', () => {
  let component: BuyListComponent;
  let fixture: ComponentFixture<BuyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatButtonModule, MatIconModule],
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
