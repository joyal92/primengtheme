import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primetable } from './primetable';

describe('Primetable', () => {
  let component: Primetable;
  let fixture: ComponentFixture<Primetable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Primetable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primetable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
