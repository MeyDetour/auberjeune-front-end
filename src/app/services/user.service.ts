import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {env} from '../environment/environment';
import {User} from '../model/User.type';


interface ApiTokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',

})
export class UserService {
  private errorSource = new BehaviorSubject<string>("");
  error$ = this.errorSource.asObservable();

  private tokenSource = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSource.asObservable();

  setToken(token: string | null) {
    this.tokenSource.next(token);
  }
  setError(error: string) {
    this.errorSource.next(error);
  }

  private baseUrl: string = env.apiUrl;

  constructor(private http: HttpClient) {
  }


  async login(user: User) {
    console.log(this.baseUrl + "api/login_check");
    console.log(user)
    return this.http.post<ApiTokenResponse>(this.baseUrl + "api/login_check", {
      username: user.email,
      password: user.password
    }).subscribe(response => {
        let token = response.token
        localStorage.setItem("token", token);
        this.setToken(token);
      }
    )
  }




}
