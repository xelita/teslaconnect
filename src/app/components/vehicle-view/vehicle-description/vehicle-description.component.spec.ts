import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VehicleDescriptionComponent} from './vehicle-description.component';

describe('VehicleDescriptionComponent', () => {
  let component: VehicleDescriptionComponent;
  let fixture: ComponentFixture<VehicleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleDescriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
