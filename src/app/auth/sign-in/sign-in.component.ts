import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NavigationService} from '../../shared/services/navigation.service';
import {environment} from '../../../environments/environment';
import {TeslaService} from '../../services/tesla.service';
import {AuthTokenModel} from '../../models/auth-token.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private navigationService: NavigationService,
    private teslaService: TeslaService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  formClickHandler() {
    console.log(this.form.value);
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.teslaService.getAccessToken(email, password).subscribe(token => this.onTokenModelReceived(token));
  }

  onTokenModelReceived(tokenModel: AuthTokenModel): void {
    this.teslaService.setStoredAccessToken(tokenModel.access_token);
    this.navigationService.goVehicles();
  }

  devClickHandler() {
    this.form.get('email').setValue(environment.email);
    this.form.get('password').setValue(environment.password);
  }

  showTopAction() {
    return environment.production === false;
  }
}
