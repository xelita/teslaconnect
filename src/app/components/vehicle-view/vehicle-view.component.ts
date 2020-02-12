import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {

  @Input()
  vehicle: VehicleModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
