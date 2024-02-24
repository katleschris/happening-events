//app.component.ts
import { Component } from '@angular/core';
import { Event } from './event/event';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';

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

  editEvent(list: string, event: Event): void {}

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
