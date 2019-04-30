import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { headersToString } from "selenium-webdriver/http";
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};
@Injectable({ providedIn: "root" })
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    const body = new HttpParams()
      .set("username", username)
      .set("password", password);

    return this.http
      .post<any>(
        `http://localhost:8080/ipl/rest/auth/authenticUser`,
        body,
        httpOptions
      )
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.authToken) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
