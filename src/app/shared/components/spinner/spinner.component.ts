import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  show(): void {
    this.loading = true;
  }

  hide(): void {
    this.loading = false;
  }
}
