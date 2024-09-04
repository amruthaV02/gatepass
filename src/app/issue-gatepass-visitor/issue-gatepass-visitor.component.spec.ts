import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueGatepassVisitorComponent } from './issue-gatepass-visitor.component';

describe('IssueGatepassVisitorComponent', () => {
  let component: IssueGatepassVisitorComponent;
  let fixture: ComponentFixture<IssueGatepassVisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueGatepassVisitorComponent]
    });
    fixture = TestBed.createComponent(IssueGatepassVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
