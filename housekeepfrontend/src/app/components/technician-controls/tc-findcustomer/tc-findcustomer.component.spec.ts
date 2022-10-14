import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcFindcustomerComponent } from './tc-findcustomer.component';

describe('TcFindcustomerComponent', () => {
  let component: TcFindcustomerComponent;
  let fixture: ComponentFixture<TcFindcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcFindcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcFindcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
