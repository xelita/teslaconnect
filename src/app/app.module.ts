import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {
  MatBottomSheet, MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {VehicleListComponent} from './components/vehicle-list/vehicle-list.component';
import {VehicleListItemComponent} from './components/vehicle-list-item/vehicle-list-item.component';
import {VehiculeDetailsComponent} from './components/vehicule-details/vehicule-details.component';
import {ChargingActionsComponent} from './components/vehicle-actions/charging-actions/charging-actions.component';
import {MoreActionsLabelComponent} from './shared/components/more-actions-label/more-actions-label.component';
import {MiscActionsComponent} from './components/vehicle-actions/misc-actions/misc-actions.component';
import { LockingActionsComponent } from './components/vehicle-actions/locking-actions/locking-actions.component';
import { SplashComponent } from './components/splash/splash.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PageNotFoundComponent,
    SignInComponent,
    VehicleListComponent,
    VehicleListItemComponent,
    VehiculeDetailsComponent,
    ChargingActionsComponent,
    MoreActionsLabelComponent,
    MiscActionsComponent,
    LockingActionsComponent,
    SplashComponent,
    SpinnerComponent
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
  entryComponents: [
    ChargingActionsComponent,
    LockingActionsComponent,
    MiscActionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
