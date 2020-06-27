import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: EventsRoutingModule.COMPONENTS,
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
