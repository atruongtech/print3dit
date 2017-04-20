import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterBaseComponent } from './printer-base.component';

describe('PrinterBaseComponent', () => {
  let component: PrinterBaseComponent;
  let fixture: ComponentFixture<PrinterBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
