import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingActionsComponent } from './charging-actions.component';

describe('ChargingActionsComponent', () => {
  let component: ChargingActionsComponent;
  let fixture: ComponentFixture<ChargingActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargingActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
