import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../../services/loader/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnInit() {
  }
}
