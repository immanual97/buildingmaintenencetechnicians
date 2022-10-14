import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWorkrequestComponent } from './ad-workrequest.component';

describe('AdWorkrequestComponent', () => {
  let component: AdWorkrequestComponent;
  let fixture: ComponentFixture<AdWorkrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdWorkrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdWorkrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
