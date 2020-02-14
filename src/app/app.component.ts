import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teslaconnect';

  constructor(private router: Router) {
  }

  showTopTitle() {
    return this.router.url.indexOf('splash') === -1;
  }
}
