import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdChangepasswordComponent } from './ad-changepassword.component';

describe('AdChangepasswordComponent', () => {
  let component: AdChangepasswordComponent;
  let fixture: ComponentFixture<AdChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdChangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
