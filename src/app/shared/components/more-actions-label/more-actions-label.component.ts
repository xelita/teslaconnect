import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-more-actions-label',
  templateUrl: './more-actions-label.component.html',
  styleUrls: ['./more-actions-label.component.scss']
})
export class MoreActionsLabelComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  show: boolean;

  @Output()
  clicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  clickHandler() {
    this.clicked.emit();
  }
}
