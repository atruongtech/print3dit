import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLibraryComponent } from './print-library.component';

describe('PrintLibraryComponent', () => {
  let component: PrintLibraryComponent;
  let fixture: ComponentFixture<PrintLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
