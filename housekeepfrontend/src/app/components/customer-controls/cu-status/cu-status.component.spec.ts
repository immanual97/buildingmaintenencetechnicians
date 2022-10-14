import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuStatusComponent } from './cu-status.component';

describe('CuStatusComponent', () => {
  let component: CuStatusComponent;
  let fixture: ComponentFixture<CuStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
