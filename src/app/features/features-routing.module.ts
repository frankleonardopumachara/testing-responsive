import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {FeaturesComponent} from './features.component'

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    //   },
    //   {
    //     path: 'contacts',
    //     loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full',
    //   },
    //   // {
    //   //   path: '**',
    //   //   component: NotFoundComponent,
    //   // },
    // ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
