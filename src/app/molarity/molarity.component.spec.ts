import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolarityComponent } from './molarity.component';

describe('MolarityComponent', () => {
  let component: MolarityComponent;
  let fixture: ComponentFixture<MolarityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolarityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
