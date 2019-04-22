import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldOrderPage } from './old-order.page';

describe('OldOrderPage', () => {
  let component: OldOrderPage;
  let fixture: ComponentFixture<OldOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
