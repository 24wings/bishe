import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySignupPage } from './buy-signup.page';

describe('BuySignupPage', () => {
  let component: BuySignupPage;
  let fixture: ComponentFixture<BuySignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
