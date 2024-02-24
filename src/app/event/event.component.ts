//event component
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from './event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() event: Event | null = null;
  @Output() edit = new EventEmitter<Event>();
}