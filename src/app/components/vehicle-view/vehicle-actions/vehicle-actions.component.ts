import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from '../../../models/vehicle.model';
import {LockingActionsComponent} from '../../vehicle-actions/locking-actions/locking-actions.component';
import {ChargingActionsComponent} from '../../vehicle-actions/charging-actions/charging-actions.component';
import {MiscActionsComponent} from '../../vehicle-actions/misc-actions/misc-actions.component';
import {NavigationService} from '../../../shared/services/navigation.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {TeslaService} from '../../../services/tesla.service';
import {MatBottomSheet} from '@angular/material';

@Component({
  selector: 'app-vehicle-actions',
  templateUrl: './vehicle-actions.component.html',
  styleUrls: ['./vehicle-actions.component.scss']
})
export class VehicleActionsComponent implements OnInit {

  @Input()
  vehicle: VehicleModel;

  constructor(private navigationService: NavigationService,
              private notificationService: NotificationService,
              private teslaService: TeslaService,
              private bottomSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
  }

  vehicleOnline(vehicle: VehicleModel): boolean {
    return vehicle.state === 'online';
  }

  displayLockingActions(vehicle: VehicleModel) {
    this.bottomSheet.open(LockingActionsComponent, {data: {vehicle}});
  }

  displayChargeActions(vehicle: VehicleModel) {
    this.bottomSheet.open(ChargingActionsComponent, {data: {vehicle}});
  }

  displayMiscActions(vehicle: VehicleModel) {
    this.bottomSheet.open(MiscActionsComponent, {data: {vehicle}});
  }

  vehicleDetailsClickHandler(id: string) {
    this.navigationService.goVehicleDetails(id);
  }
}
