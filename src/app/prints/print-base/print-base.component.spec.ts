import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBaseComponent } from './print-base.component';

describe('PrintBaseComponent', () => {
  let component: PrintBaseComponent;
  let fixture: ComponentFixture<PrintBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
