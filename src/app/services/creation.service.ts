import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Room} from '../model/Room.type';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreationService {
  private formToRenderSource = new BehaviorSubject<string>("booking");
  formToRender$ = this.formToRenderSource.asObservable();

  constructor(private http: HttpClient) {
  }

  setFormToRender(name: string): void {
    this.formToRenderSource.next(name);
  }

  createRoom(room : Room){
    this.http.post<Room>(room + 'api/room/new', room).subscribe(response=>{
      console.log(response);
    })
  }
}
