import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component02Component } from './component-02.component';

describe('Component02Component', () => {
  let component: Component02Component;
  let fixture: ComponentFixture<Component02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component02Component]
    });
    fixture = TestBed.createComponent(Component02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
