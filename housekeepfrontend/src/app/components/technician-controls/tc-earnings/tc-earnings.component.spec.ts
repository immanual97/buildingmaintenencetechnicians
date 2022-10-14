import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcEarningsComponent } from './tc-earnings.component';

describe('TcEarningsComponent', () => {
  let component: TcEarningsComponent;
  let fixture: ComponentFixture<TcEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcEarningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
