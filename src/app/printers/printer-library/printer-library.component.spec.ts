import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterLibraryComponent } from './printer-library.component';

describe('PrinterLibraryComponent', () => {
  let component: PrinterLibraryComponent;
  let fixture: ComponentFixture<PrinterLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
