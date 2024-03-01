//app.component.ts
import { Component } from '@angular/core';
import { Event } from './event/event';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';

import { MatDialog } from '@angular/material/dialog'
import { EventDialogResult, EventDialogComponent } from './event-dialog/event-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happening-events'
  nextUp: Event[] = [
    {
      title: 'The waiting Room',
      description: 'Singles mixer in long street'
    },
    {
      title: 'Google event',
      description: 'Learn google cloud'
    }
  ];
  inProgress: Event[] = [];
  done: Event[] = [];

  constructor(private dialog: MatDialog) {}

  newEvent(): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '270px',
      data: {
        event: {},
      }
    });
    dialogRef
     .afterClosed()
     .subscribe((result: EventDialogResult | undefined) => {
      if (!result) {
        return;
      }
      this.nextUp.push(result.event)
     })
  }

  editEvent(list: 'done'| 'nextUp' | 'inProgress', event: Event): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '270px',
      data: {
        event,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: EventDialogResult|undefined) =>{
      if (!result){
        return;
      }
      const dataList = this[list];
      const eventIndex = dataList.indexOf(event);
      if (result.delete){
        dataList.splice(eventIndex, 1);
      } else {
        dataList[eventIndex] = event;
      }
    });
  }

  drop(event: CdkDragDrop<Event[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
