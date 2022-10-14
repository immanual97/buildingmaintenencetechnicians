import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuSearchtechnicianComponent } from './cu-searchtechnician.component';

describe('CuSearchtechnicianComponent', () => {
  let component: CuSearchtechnicianComponent;
  let fixture: ComponentFixture<CuSearchtechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuSearchtechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuSearchtechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
