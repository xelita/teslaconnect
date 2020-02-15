import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {VehicleListComponent} from './components/vehicle-list/vehicle-list.component';
import {VehiculeDetailsComponent} from './components/vehicule-details/vehicule-details.component';
import {ChargingActionsComponent} from './components/vehicle-actions/charging-actions/charging-actions.component';
import {MoreActionsLabelComponent} from './shared/components/more-actions-label/more-actions-label.component';
import {MiscActionsComponent} from './components/vehicle-actions/misc-actions/misc-actions.component';
import {LockingActionsComponent} from './components/vehicle-actions/locking-actions/locking-actions.component';
import {SplashComponent} from './components/splash/splash.component';
import {SpinnerComponent} from './shared/components/spinner/spinner.component';
import {VehicleViewComponent} from './components/vehicle-view/vehicle-view.component';
import {MainInfoComponent} from './components/vehicle-view/main-info/main-info.component';
import {VehicleDescriptionComponent} from './components/vehicle-view/vehicle-description/vehicle-description.component';
import {VehicleActionsComponent} from './components/vehicle-view/vehicle-actions/vehicle-actions.component';
import {LoaderInterceptor} from './shared/services/loader/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignInComponent,
    VehicleListComponent,
    VehiculeDetailsComponent,
    ChargingActionsComponent,
    MoreActionsLabelComponent,
    MiscActionsComponent,
    LockingActionsComponent,
    SplashComponent,
    SpinnerComponent,
    VehicleViewComponent,
    MainInfoComponent,
    VehicleDescriptionComponent,
    VehicleActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
