import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuAddressComponent } from './cu-address.component';

describe('CuAddressComponent', () => {
  let component: CuAddressComponent;
  let fixture: ComponentFixture<CuAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
