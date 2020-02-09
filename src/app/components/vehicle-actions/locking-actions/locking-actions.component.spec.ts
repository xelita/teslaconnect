import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockingActionsComponent } from './locking-actions.component';

describe('LockingActionsComponent', () => {
  let component: LockingActionsComponent;
  let fixture: ComponentFixture<LockingActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockingActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
