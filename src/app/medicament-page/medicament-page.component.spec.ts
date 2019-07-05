import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentPageComponent } from './medicament-page.component';

describe('MedicamentPageComponent', () => {
  let component: MedicamentPageComponent;
  let fixture: ComponentFixture<MedicamentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
