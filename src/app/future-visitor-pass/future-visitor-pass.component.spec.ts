import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureVisitorPassComponent } from './future-visitor-pass.component';

describe('FutureVisitorPassComponent', () => {
  let component: FutureVisitorPassComponent;
  let fixture: ComponentFixture<FutureVisitorPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureVisitorPassComponent]
    });
    fixture = TestBed.createComponent(FutureVisitorPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
