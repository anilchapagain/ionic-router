import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CComponent } from './c.component';

describe('CComponent', () => {
  let component: CComponent;
  let fixture: ComponentFixture<CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
