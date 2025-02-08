import {Component, signal} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {FailureHandler} from '../../../services/failureHandler';
import {Router} from '@angular/router';
import {CreationService} from '../../../services/creation.service';

@Component({
  selector: 'app-room',
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  failMessage = signal<string>("")

  constructor (private failureHandler: FailureHandler, private creationService : CreationService) {
  }

  ngOnInit() {

    this.failureHandler.error$.subscribe(failMessage => {
      console.log("detec an error ", failMessage);
      if (failMessage) {
        this.failMessage.set(failMessage);
      }
    })


  }

  async onSubmit() {



  }

}
