import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Event } from '../event/event'

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent {
  private backupEvent: Partial<Event> = { ...this.data.event };

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventDialogData
  ) {}

  cancel(): void {
    this.data.event.title = this.backupEvent.title;
    this.data.event.description = this.backupEvent.description;
    this.dialogRef.close(this.data);
  }
}

export interface EventDialogData {
  event: Partial<Event>;
  enableDelete: boolean;
}

export interface EventDialogResult {
  event: Event;
  delete?: boolean;
}