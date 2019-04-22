import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyHomePage } from './buy-home.page';

describe('BuyHomePage', () => {
  let component: BuyHomePage;
  let fixture: ComponentFixture<BuyHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
