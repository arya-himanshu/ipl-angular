import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./dashboardContainer/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { LiveScoreComponent } from "./liveScore/live-score/live-score.component";
import { LiveScrePanelComponent } from "./liveScore/live-scre-panel/live-scre-panel.component";
import { LoginComponent } from "./loginContainer/login/login.component";
import { NavComponent } from "./iplNav/nav/nav.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TeamContainerComponent } from "./team/team-container/team-container.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LiveScoreComponent,
    LiveScrePanelComponent,
    NavComponent,
    TeamContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
