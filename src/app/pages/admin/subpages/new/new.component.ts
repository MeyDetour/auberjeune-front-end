import {Component, signal} from '@angular/core';
import {CreationService} from '../../../../services/creation.service';
import {BookingComponent} from '../../../../components/form/booking/booking.component';
import {RoomComponent} from '../../../../components/form/room/room.component';
import {BedComponent} from '../../../../components/form/bed/bed.component';
import {
  OverviewBedsAndRoomsComponent
} from '../../../../components/overview-beds-and-rooms/overview-beds-and-rooms.component';

@Component({
  selector: 'app-new',
  imports: [
    BookingComponent,
    RoomComponent,
    BedComponent,
    OverviewBedsAndRoomsComponent
  ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  formToRender = signal<string>("booking")

  constructor(private creationService: CreationService) {
    this.creationService.formToRender$.subscribe(form => {
      this.formToRender.set(form);
    })
  }

  ngOnInit() {

  }

  changeForm(name: string) {

    this.creationService.setFormToRender(name)
  }

}
