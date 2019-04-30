import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { Team } from "src/app/models/team";
import { TeamService } from "../team.service";

@Component({
  selector: "app-team-container",
  templateUrl: "./team-container.component.html",
  styleUrls: ["./team-container.component.css"]
})
export class TeamContainerComponent implements OnInit {
  teamArray: Array<Team> = new Array();

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamService
      .getAllTeams()
      .subscribe(response => this.setResponse(response));
  }

  setResponse(response) {
    this.teamArray = response.response;
  }
  teamDetails(teamId) {
    this.router.navigate(["/team-detail/" + teamId]);
  }
}
