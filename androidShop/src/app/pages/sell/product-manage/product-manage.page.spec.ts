import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagePage } from './product-manage.page';

describe('ProductManagePage', () => {
  let component: ProductManagePage;
  let fixture: ComponentFixture<ProductManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
