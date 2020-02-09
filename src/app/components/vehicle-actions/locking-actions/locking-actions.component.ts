import {Component, Inject, OnInit} from '@angular/core';
import {NotificationService} from '../../../shared/services/notification.service';
import {TeslaService} from '../../../services/tesla.service';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-locking-actions',
  templateUrl: './locking-actions.component.html',
  styleUrls: ['./locking-actions.component.scss']
})
export class LockingActionsComponent implements OnInit {

  constructor(private notificationService: NotificationService,
              private teslaService: TeslaService,
              private bottomSheetRef: MatBottomSheetRef<LockingActionsComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  ngOnInit() {
  }

  doorLock(event: MouseEvent): void {
    this.teslaService.doorLock(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Doors has been locked.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  doorUnlock(event: MouseEvent): void {
    this.teslaService.doorUnlock(this.data.id).subscribe(data => {
      if (data.result === true) {
        this.notificationService.notify('Doors has been unlocked.');
      } else {
        this.notificationService.notify(data.reason);
      }
    });
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
