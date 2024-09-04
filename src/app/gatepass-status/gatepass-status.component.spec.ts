import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatepassStatusComponent } from './gatepass-status.component';

describe('GatepassStatusComponent', () => {
  let component: GatepassStatusComponent;
  let fixture: ComponentFixture<GatepassStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatepassStatusComponent]
    });
    fixture = TestBed.createComponent(GatepassStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
