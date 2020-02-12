import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {TeslaService} from '../../../services/tesla.service';
import {NotificationService} from '../../../shared/services/notification.service';

@Component({
  selector: 'app-charging-actions',
  templateUrl: './charging-actions.component.html',
  styleUrls: ['./charging-actions.component.scss']
})
export class ChargingActionsComponent implements OnInit {

  constructor(private notificationService: NotificationService,
              private teslaService: TeslaService,
              private bottomSheetRef: MatBottomSheetRef<ChargingActionsComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  ngOnInit() {
  }

  startCharge(event: MouseEvent): void {
    this.teslaService.startCharge(this.data.vehicle.id_s).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Charging process started.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  stopCharge(event: MouseEvent): void {
    this.teslaService.stopCharge(this.data.vehicle.id_s).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Charging process stopped.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
