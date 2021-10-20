import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ContactsRoutingModule} from './contacts-routing.module'
import {ContactsComponent} from './contacts.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { NaturalContactsPageComponent } from './pages/natural-contacts-page/natural-contacts-page.component';
import { TableComponent } from './components/table/table.component'
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbSpinnerModule,
  NbTooltipModule
} from '@nebular/theme'


@NgModule({
  declarations: [
    ContactsComponent,
    CompaniesPageComponent,
    EmployeesPageComponent,
    NaturalContactsPageComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    NbTooltipModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NbInputModule
  ]
})
export class ContactsModule {
}
