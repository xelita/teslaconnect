import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehicleModel} from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.scss']
})
export class VehiculeDetailsComponent implements OnInit {

  private vehicle: VehicleModel;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.onVehicleReceived(data.vehicle));
  }

  onVehicleReceived(vehicle: VehicleModel) {
    console.log(vehicle);
    this.vehicle = vehicle;
  }
}
