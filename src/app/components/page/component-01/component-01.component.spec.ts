import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component01Component } from './component-01.component';

describe('Component01Component', () => {
  let component: Component01Component;
  let fixture: ComponentFixture<Component01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component01Component]
    });
    fixture = TestBed.createComponent(Component01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
