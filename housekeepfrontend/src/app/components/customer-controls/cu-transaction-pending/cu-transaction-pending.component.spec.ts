import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTransactionPendingComponent } from './cu-transaction-pending.component';

describe('CuTransactionPendingComponent', () => {
  let component: CuTransactionPendingComponent;
  let fixture: ComponentFixture<CuTransactionPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuTransactionPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuTransactionPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
