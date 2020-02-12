import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VehicleActionsComponent} from './vehicle-actions.component';

describe('VehicleActionsComponent', () => {
  let component: VehicleActionsComponent;
  let fixture: ComponentFixture<VehicleActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleActionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
