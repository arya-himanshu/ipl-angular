import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { Team } from "../models/team";
import { TeamDetails } from "../models/teamDetails";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class TeamService {
  private heroesUrl = "http://localhost:8080/ipl/rest/"; // URL to web api

  constructor(private http: HttpClient) {}
  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.heroesUrl + "team/allTeams").pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError<Team[]>("getHeroes", []))
    );
  }

  getTeamsDetails(id): Observable<TeamDetails[]> {
    return this.http
      .get<TeamDetails[]>(this.heroesUrl + "team/teamDetailsById?teamId=" + id)
      .pipe(
        tap(_ => this.log("fetched heroes")),
        catchError(this.handleError<TeamDetails[]>("getHeroes", []))
      );
  }
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
