import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./guard/auth-guard.service";
import { DashboardComponent } from "./dashboardContainer/dashboard/dashboard.component";
import { LiveScoreComponent } from "./liveScore/live-score/live-score.component";
import { LoginComponent } from "./loginContainer/login/login.component";
import { NgModule } from "@angular/core";
import { TeamContainerComponent } from "./team/team-container/team-container.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "livescore", component: LiveScoreComponent },
  {
    path: "teams",
    component: TeamContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
