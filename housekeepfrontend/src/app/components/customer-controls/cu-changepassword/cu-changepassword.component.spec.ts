import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuChangepasswordComponent } from './cu-changepassword.component';

describe('CuChangepasswordComponent', () => {
  let component: CuChangepasswordComponent;
  let fixture: ComponentFixture<CuChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuChangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
