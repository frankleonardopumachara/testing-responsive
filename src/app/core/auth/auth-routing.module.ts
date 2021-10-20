import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthPageComponent} from './pages/auth-page/auth-page.component'
import {LoginComponent} from './components/login/login.component'
import {PasswordRecoverComponent} from './components/password-recover/password-recover.component'

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'request-password',
        component: PasswordRecoverComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ],
  },
  {
    path: '**', redirectTo: ''
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
