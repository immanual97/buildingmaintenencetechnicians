import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuPaymentComponent } from './cu-payment.component';

describe('CuPaymentComponent', () => {
  let component: CuPaymentComponent;
  let fixture: ComponentFixture<CuPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
