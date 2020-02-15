import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {VehicleListComponent} from './components/vehicle-list/vehicle-list.component';
import {VehicleListDataResolverService} from './components/vehicle-list/vehicle-list-data-resolver.service';
import {VehiculeDetailsComponent} from './components/vehicule-details/vehicule-details.component';
import {VehicleDetailsDataResolverService} from './components/vehicule-details/vehicle-details-data-resolver.service';
import {SplashComponent} from './components/splash/splash.component';
import {SignInDataResolverService} from './auth/sign-in/sign-in-data-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/splash', pathMatch: 'full'},
  {path: 'splash', component: SplashComponent},
  {path: 'signin', component: SignInComponent, resolve: {token: SignInDataResolverService}},
  {path: 'vehicles', component: VehicleListComponent, resolve: {vehicles: VehicleListDataResolverService}},
  {path: 'vehicles/:id', component: VehiculeDetailsComponent, resolve: {vehicle: VehicleDetailsDataResolverService}},
  {path: '**', redirectTo: 'signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
