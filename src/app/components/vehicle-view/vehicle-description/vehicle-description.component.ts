import {Component, Input, OnInit} from '@angular/core';
import {VehicleModel} from '../../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-description',
  templateUrl: './vehicle-description.component.html',
  styleUrls: ['./vehicle-description.component.scss']
})
export class VehicleDescriptionComponent implements OnInit {

  @Input()
  vehicle: VehicleModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
