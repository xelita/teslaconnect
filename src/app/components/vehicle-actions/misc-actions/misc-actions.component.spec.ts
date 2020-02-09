import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscActionsComponent } from './misc-actions.component';

describe('MiscActionsComponent', () => {
  let component: MiscActionsComponent;
  let fixture: ComponentFixture<MiscActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
