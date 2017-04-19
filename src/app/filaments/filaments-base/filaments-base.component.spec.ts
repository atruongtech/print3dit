import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentsBaseComponent } from './filaments-base.component';

describe('FilamentsBaseComponent', () => {
  let component: FilamentsBaseComponent;
  let fixture: ComponentFixture<FilamentsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilamentsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilamentsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
