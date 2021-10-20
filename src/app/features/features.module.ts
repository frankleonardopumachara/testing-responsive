import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FeaturesComponent } from './features.component'
import {NbLayoutModule, NbMenuModule, NbSidebarModule} from '@nebular/theme'
import {CoreModule} from '../core/core.module'
import {FeaturesRoutingModule} from './features-routing.module'



@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    NbSidebarModule,
    NbLayoutModule,
    RouterModule,
    CoreModule,
    FeaturesRoutingModule,
    NbMenuModule
  ]
})
export class FeaturesModule { }
