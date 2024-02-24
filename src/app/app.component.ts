//app.component.ts
import { Component } from '@angular/core';
import { Event } from './event/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happening-events';
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
}
