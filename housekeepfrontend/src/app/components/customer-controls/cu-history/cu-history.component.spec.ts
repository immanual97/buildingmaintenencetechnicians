import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuHistoryComponent } from './cu-history.component';

describe('CuHistoryComponent', () => {
  let component: CuHistoryComponent;
  let fixture: ComponentFixture<CuHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
