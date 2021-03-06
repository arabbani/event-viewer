import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventComponent {

  @Input() event: IEvent;

}
