import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcregisterComponent } from './tcregister.component';

describe('TcregisterComponent', () => {
  let component: TcregisterComponent;
  let fixture: ComponentFixture<TcregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
