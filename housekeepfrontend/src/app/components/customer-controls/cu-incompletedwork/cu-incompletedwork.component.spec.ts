import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuIncompletedworkComponent } from './cu-incompletedwork.component';

describe('CuIncompletedworkComponent', () => {
  let component: CuIncompletedworkComponent;
  let fixture: ComponentFixture<CuIncompletedworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuIncompletedworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuIncompletedworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
