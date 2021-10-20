import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalContactsPageComponent } from './natural-contacts-page.component';

describe('NaturalContactsPageComponent', () => {
  let component: NaturalContactsPageComponent;
  let fixture: ComponentFixture<NaturalContactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalContactsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
