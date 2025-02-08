import {Component, signal} from '@angular/core';
import {BedsManagementService} from '../../../../services/beds-management.service';
import {Room} from '../../../../model/Room.type';

@Component({
  selector: 'app-manage',
  imports: [],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  roomsAndBeds = signal<Room[]>([]);
  constructor(private bedManagementService : BedsManagementService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getRoomsAndBedState()


    this.bedManagementService.roomsAndBeds$.subscribe(roomsAndBeds => {
     this.roomsAndBeds.set(roomsAndBeds);
      console.log(roomsAndBeds);
    })


  }
  async getRoomsAndBedState() {
    await this.bedManagementService.getRoomsAndBedState();
  }

}
