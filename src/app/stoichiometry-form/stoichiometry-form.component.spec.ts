import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoichiometryFormComponent } from './stoichiometry-form.component';

describe('StoichiometryFormComponent', () => {
  let component: StoichiometryFormComponent;
  let fixture: ComponentFixture<StoichiometryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoichiometryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoichiometryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
