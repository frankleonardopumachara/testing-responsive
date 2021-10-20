import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CompaniesPageComponent} from './pages/companies-page/companies-page.component'
import {EmployeesPageComponent} from './pages/employees-page/employees-page.component'
import {NaturalContactsPageComponent} from './pages/natural-contacts-page/natural-contacts-page.component'

const routes: Routes = [
  {
    path: 'company',
    component: CompaniesPageComponent,
  },
  {
    path: 'employees',
    component: EmployeesPageComponent,
  },
  {
    path: 'contact',
    component: NaturalContactsPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {
}
