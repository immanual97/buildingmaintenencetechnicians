import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcAcceptanceComponent } from './tc-acceptance.component';

describe('TcAcceptanceComponent', () => {
  let component: TcAcceptanceComponent;
  let fixture: ComponentFixture<TcAcceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcAcceptanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
