import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidShopPage } from './android-shop.page';

describe('AndroidShopPage', () => {
  let component: AndroidShopPage;
  let fixture: ComponentFixture<AndroidShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
