import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuWorkrequestComponent } from './cu-workrequest.component';

describe('CuWorkrequestComponent', () => {
  let component: CuWorkrequestComponent;
  let fixture: ComponentFixture<CuWorkrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuWorkrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuWorkrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
