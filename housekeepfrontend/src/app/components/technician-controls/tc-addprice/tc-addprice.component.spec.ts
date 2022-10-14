import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcAddpriceComponent } from './tc-addprice.component';

describe('TcAddpriceComponent', () => {
  let component: TcAddpriceComponent;
  let fixture: ComponentFixture<TcAddpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcAddpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcAddpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
