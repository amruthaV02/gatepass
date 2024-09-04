import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueGatepassStudentComponent } from './issue-gatepass-student.component';

describe('IssueGatepassStudentComponent', () => {
  let component: IssueGatepassStudentComponent;
  let fixture: ComponentFixture<IssueGatepassStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueGatepassStudentComponent]
    });
    fixture = TestBed.createComponent(IssueGatepassStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
