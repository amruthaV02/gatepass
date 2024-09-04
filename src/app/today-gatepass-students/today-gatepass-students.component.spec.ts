import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayGatepassStudentsComponent } from './today-gatepass-students.component';

describe('TodayGatepassStudentsComponent', () => {
  let component: TodayGatepassStudentsComponent;
  let fixture: ComponentFixture<TodayGatepassStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayGatepassStudentsComponent]
    });
    fixture = TestBed.createComponent(TodayGatepassStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
