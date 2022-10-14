import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcChangestatusComponent } from './tc-changestatus.component';

describe('TcChangestatusComponent', () => {
  let component: TcChangestatusComponent;
  let fixture: ComponentFixture<TcChangestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcChangestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcChangestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
