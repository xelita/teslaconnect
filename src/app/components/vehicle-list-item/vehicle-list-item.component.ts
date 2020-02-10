import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from '../../shared/services/navigation.service';
import {VehicleModel} from '../../models/vehicle.model';
import {MatBottomSheet} from '@angular/material';
import {ChargingActionsComponent} from '../vehicle-actions/charging-actions/charging-actions.component';
import {MiscActionsComponent} from '../vehicle-actions/misc-actions/misc-actions.component';
import {TeslaService} from '../../services/tesla.service';
import {NotificationService} from '../../shared/services/notification.service';
import {LockingActionsComponent} from '../vehicle-actions/locking-actions/locking-actions.component';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.scss']
})
export class VehicleListItemComponent implements OnInit {

  @Input()
  vehicle: VehicleModel;

  @Input()
  withDetails: boolean;

  @Input()
  action: string;

  constructor(private navigationService: NavigationService,
              private notificationService: NotificationService,
              private teslaService: TeslaService,
              private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
  }

  vehicleDetailsClickHandler(id: number) {
    this.navigationService.goVehicleDetails(id);
  }

  displayLockingActions(id: number) {
    this.bottomSheet.open(LockingActionsComponent, {data: {id}});
  }

  displayChargeActions(id: number) {
    this.bottomSheet.open(ChargingActionsComponent, {data: {id}});
  }

  displayMiscActions(id: number) {
    this.bottomSheet.open(MiscActionsComponent, {data: {id}});
  }

  vehicleOnline(vehicle: VehicleModel): boolean {
    return vehicle.state === 'online';
  }

  detailsButtonVisible(vehicle: VehicleModel): boolean {
    return !this.withDetails && this.vehicleOnline(vehicle);
  }

  wakeUpVehicleClickHandler(id: string) {
    this.teslaService.wakeUp(id).subscribe((vehicle) => this.vehicle = vehicle);
  }
}
