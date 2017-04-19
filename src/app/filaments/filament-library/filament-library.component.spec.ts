import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentLibraryComponent } from './filament-library.component';

describe('FilamentLibraryComponent', () => {
  let component: FilamentLibraryComponent;
  let fixture: ComponentFixture<FilamentLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilamentLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilamentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
