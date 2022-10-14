import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcPaymentComponent } from './tc-payment.component';

describe('TcPaymentComponent', () => {
  let component: TcPaymentComponent;
  let fixture: ComponentFixture<TcPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
