import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../shared/services/storage.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {VehicleModel} from '../models/vehicle.model';
import {ResponseWrapperModel} from '../models/response-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

  private apiBaseUrl: string = environment.tesla_api_base_url;

  constructor(
    private http: HttpClient,
    private storageService: StorageService) {
  }

  getVehicles(): Observable<VehicleModel[]> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .get<ResponseWrapperModel<VehicleModel[]>>(this.apiBaseUrl + '/vehicles', {headers})
      .pipe(map(result => result.response));
  }

  getVehicleData(id: string): Observable<VehicleModel> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .get<ResponseWrapperModel<VehicleModel>>(this.apiBaseUrl + '/vehicles/' + id + '/vehicle_data', {headers})
      .pipe(map(result => result.response));
  }

  wakeUp(id: string): Observable<VehicleModel> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<VehicleModel>>(this.apiBaseUrl + '/vehicles/' + id + '/wake_up', null, {headers})
      .pipe(map(result => result.response));
  }

  startCharge(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/charge_start', null, {headers})
      .pipe(map(result => result.response));
  }

  stopCharge(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/charge_stop', null, {headers})
      .pipe(map(result => result.response));
  }

  doorLock(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/door_lock', null, {headers})
      .pipe(map(result => result.response));
  }

  doorUnlock(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/door_unlock', null, {headers})
      .pipe(map(result => result.response));
  }

  ventWindow(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/window_control', {command: 'vent'}, {headers})
      .pipe(map(result => result.response));
  }

  closeWindow(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/window_control', {command: 'close'}, {headers})
      .pipe(map(result => result.response));
  }

  openFrunk(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/actuate_trunk', {which_trunk: 'front'}, {headers})
      .pipe(map(result => result.response));
  }

  openTrunk(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/actuate_trunk', {which_trunk: 'rear'}, {headers})
      .pipe(map(result => result.response));
  }

  honkHorn(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/honk_horn', null, {headers})
      .pipe(map(result => result.response));
  }

  flashLights(id: string): Observable<any> {
    const headers = this.getHeaderWithAuth();
    return this.http
      .post<ResponseWrapperModel<any>>(this.apiBaseUrl + '/vehicles/' + id + '/command/flash_lights', null, {headers})
      .pipe(map(result => result.response));
  }

  private getHeaderWithAuth() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.storageService.read('token'));
    return headers;
  }
}
