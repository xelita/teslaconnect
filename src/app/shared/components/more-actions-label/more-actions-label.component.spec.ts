import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreActionsLabelComponent } from './more-actions-label.component';

describe('MoreActionsLabelComponent', () => {
  let component: MoreActionsLabelComponent;
  let fixture: ComponentFixture<MoreActionsLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreActionsLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreActionsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
