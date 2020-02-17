import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {LoaderService} from './loader.service';
import {NotificationService} from '../notification.service';
import {NavigationService} from '../navigation.service';
import {TeslaService} from '../../../services/tesla.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];

  constructor(private navigationService: NavigationService,
              private notificationService: NotificationService,
              private teslaService: TeslaService,
              private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);
    this.loaderService.isLoading.next(true);
    return new Observable(observer => {
      const subscription = next.handle(req).subscribe(
        event => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req);
            observer.next(event);
          }
        },
        err => {
          console.error(err);
          if (err.status === 401) {
            this.teslaService.clearStoredAccessToken();
            this.navigationService.goSignIn();
          }
          this.notificationService.notify(`An error occurred: ${err.statusText} (${err.status})`);
          this.removeRequest(req);
          observer.error(err);
        },
        () => {
          this.removeRequest(req);
          observer.complete();
        });
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loaderService.isLoading.next(this.requests.length > 0);
  }
}
