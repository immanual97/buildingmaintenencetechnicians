import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcChangepasswordComponent } from './tc-changepassword.component';

describe('TcChangepasswordComponent', () => {
  let component: TcChangepasswordComponent;
  let fixture: ComponentFixture<TcChangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcChangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcChangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
