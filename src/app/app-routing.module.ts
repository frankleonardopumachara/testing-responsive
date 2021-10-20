import {NgModule} from '@angular/core'

import {Routes, RouterModule} from '@angular/router'

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
    data: {
      load: true
    }
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'pages'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
