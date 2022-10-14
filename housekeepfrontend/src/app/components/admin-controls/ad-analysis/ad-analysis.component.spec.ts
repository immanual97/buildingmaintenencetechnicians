import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAnalysisComponent } from './ad-analysis.component';

describe('AdAnalysisComponent', () => {
  let component: AdAnalysisComponent;
  let fixture: ComponentFixture<AdAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
