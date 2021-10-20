import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AverageMarginComponent } from './pages/average-margin/average-margin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AverageMarginComponent
  ],
  imports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
