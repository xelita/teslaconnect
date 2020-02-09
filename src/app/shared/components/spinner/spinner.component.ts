import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  private display: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  show(): void {
    this.display = true;
  }

  hide(): void {
    this.display = false;
  }
}
