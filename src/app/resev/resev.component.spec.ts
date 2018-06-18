/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResevComponent } from './resev.component';

describe('ResevComponent', () => {
  let component: ResevComponent;
  let fixture: ComponentFixture<ResevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
