import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureStudentPassesComponent } from './future-student-passes.component';

describe('FutureStudentPassesComponent', () => {
  let component: FutureStudentPassesComponent;
  let fixture: ComponentFixture<FutureStudentPassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureStudentPassesComponent]
    });
    fixture = TestBed.createComponent(FutureStudentPassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
