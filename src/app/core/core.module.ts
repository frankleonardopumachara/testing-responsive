import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from './components/header/header.component'
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbMenuService,
  NbSidebarService,
  NbUserModule
} from '@nebular/theme'


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbIconModule
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class CoreModule {
}
