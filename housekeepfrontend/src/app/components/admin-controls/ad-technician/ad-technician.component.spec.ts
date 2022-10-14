import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTechnicianComponent } from './ad-technician.component';

describe('AdTechnicianComponent', () => {
  let component: AdTechnicianComponent;
  let fixture: ComponentFixture<AdTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
