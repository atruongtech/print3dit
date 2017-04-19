import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentDetailsComponent } from './filament-details.component';

describe('FilamentDetailsComponent', () => {
  let component: FilamentDetailsComponent;
  let fixture: ComponentFixture<FilamentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilamentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilamentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
