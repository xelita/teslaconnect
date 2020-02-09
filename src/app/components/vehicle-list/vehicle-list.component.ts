import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleModel} from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  private vehicles: VehicleModel[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.onVehiclesReceived(data.vehicles));
  }

  onVehiclesReceived(vehicles: VehicleModel[]) {
    console.log(vehicles);
    this.vehicles = vehicles;
  }
}
