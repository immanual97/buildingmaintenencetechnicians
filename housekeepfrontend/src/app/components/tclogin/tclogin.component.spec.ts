import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcloginComponent } from './tclogin.component';

describe('TcloginComponent', () => {
  let component: TcloginComponent;
  let fixture: ComponentFixture<TcloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
