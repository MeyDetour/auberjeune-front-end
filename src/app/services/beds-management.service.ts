import {Injectable} from '@angular/core';
import {env} from '../environment/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Room} from '../model/Room.type';

@Injectable({
  providedIn: 'root'
})
export class BedsManagementService {
  private baseUrl: string = env.apiUrl;
  private roomsAndBedsStateSource = new BehaviorSubject<Array<Room>>([]);
  roomsAndBeds$ = this.roomsAndBedsStateSource.asObservable();

  constructor(private http: HttpClient) {
  }



  async getRoomsAndBedState() {
    return this.http.get<Array<Room>>(this.baseUrl + "api/rooms").subscribe(response => {
        this.roomsAndBedsStateSource.next(response);
      }
    )
  }
}
