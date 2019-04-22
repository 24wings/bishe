import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellHomePage } from './sell-home.page';

describe('SellHomePage', () => {
  let component: SellHomePage;
  let fixture: ComponentFixture<SellHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
