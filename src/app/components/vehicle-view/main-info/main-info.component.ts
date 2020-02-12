import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from '../../../models/vehicle.model';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  @Input()
  vehicle: VehicleModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  detailsAvailable(vehicle: VehicleModel): boolean {
    return vehicle.vehicle_config;
  }
}
