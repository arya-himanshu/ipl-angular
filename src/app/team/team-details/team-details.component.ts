import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
// import { TeamDetails } from "../models/teamDetails";
import { TeamService } from "../team.service";

@Component({
  selector: "app-team-details",
  templateUrl: "./team-details.component.html",
  styleUrls: ["./team-details.component.css"]
})
export class TeamDetailsComponent implements OnInit {
  id;
  teamDetails: Array<any> = new Array();
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id != null) {
      this.getTeamDetails(this.id);
    }
  }
  getTeamDetails(id) {
    this.teamService
      .getTeamsDetails(id)
      .subscribe(data => (this.teamDetails = data));
  }
}
