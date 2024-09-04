import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayGatepassVisitorsComponent } from './today-gatepass-visitors.component';

describe('TodayGatepassVisitorsComponent', () => {
  let component: TodayGatepassVisitorsComponent;
  let fixture: ComponentFixture<TodayGatepassVisitorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayGatepassVisitorsComponent]
    });
    fixture = TestBed.createComponent(TodayGatepassVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
