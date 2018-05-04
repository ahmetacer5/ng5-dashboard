import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { FakeBackendService } from './services/fake-backend.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { UserLoginsComponent } from './components/charts/chart-js/user-logins/user-logins.component';
import { NewAcountsComponent } from './components/charts/chart-js/new-acounts/new-acounts.component';
import { UserMovesComponent } from './components/charts/echarts/user-moves/user-moves.component';
import { EstimatedRevenueComponent } from './components/charts/echarts/estimated-revenue/estimated-revenue.component';
import { GraphComponent } from './components/charts/d3graph/graph/graph.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileModalComponent } from './components/modal/modal.component';
import { AvatarModule } from 'ngx-avatar';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserLoginsComponent,
    NewAcountsComponent,
    UserMovesComponent,
    EstimatedRevenueComponent,
    GraphComponent,
    ProfileModalComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxEchartsModule,
    NgxGraphModule,
    AvatarModule,
    ImageCropperModule
  ],
  providers: [AuthGuard, FakeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
