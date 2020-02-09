import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../shared/services/navigation.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.navigationService.goSignIn();
    }, 3000);
  }
}
