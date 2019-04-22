import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyLoginPage } from './buy-login.page';

describe('BuyLoginPage', () => {
  let component: BuyLoginPage;
  let fixture: ComponentFixture<BuyLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
