import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NavigationService} from '../../shared/services/navigation.service';
import {StorageService} from '../../shared/services/storage.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(
    private navigationService: NavigationService,
    private storageService: StorageService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      token: new FormControl()
    });
  }

  formClickHandler() {
    console.log(this.form.value);
    const token = this.form.get('token').value;
    this.storageService.write('token', token);
    this.navigationService.goVehicles();
  }

  devClickHandler() {
    this.form.get('token').setValue(environment.auth_token);
  }
}
