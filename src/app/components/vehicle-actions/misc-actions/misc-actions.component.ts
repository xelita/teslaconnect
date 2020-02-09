import {Component, Inject, OnInit} from '@angular/core';
import {NotificationService} from '../../../shared/services/notification.service';
import {TeslaService} from '../../../services/tesla.service';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-misc-actions',
  templateUrl: './misc-actions.component.html',
  styleUrls: ['./misc-actions.component.scss']
})
export class MiscActionsComponent implements OnInit {

  constructor(private notificationService: NotificationService,
              private teslaService: TeslaService,
              private bottomSheetRef: MatBottomSheetRef<MiscActionsComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  ngOnInit() {
  }

  ventWindow(event: MouseEvent): void {
    this.teslaService.ventWindow(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Window has been vented.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeWindow(event: MouseEvent): void {
    this.teslaService.closeWindow(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Window has been closed.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openFrunk(event: MouseEvent): void {
    this.teslaService.openFrunk(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Frunk has been open.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openTrunk(event: MouseEvent): void {
    this.teslaService.openTrunk(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Trunk has been open.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  honkHorn(event: MouseEvent): void {
    this.teslaService.honkHorn(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Horn has been honked.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  flashLights(event: MouseEvent): void {
    this.teslaService.flashLights(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Lights have been flashed.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
