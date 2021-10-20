import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbMenuModule} from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy} from '@nebular/auth'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'dummy',
          alwaysFail: false,
          delay: 0
        }),
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',

          login: {
            endpoint: '/login',
            method: 'post',
            redirect: {
              success: '/dashboard'
            }
          },
          requestPass: {
            endpoint: '/api/auth/request-password',
            method: 'post',
            redirect: {
              success: '/'
            }
          }
        }),
      ],
      forms: {
        login: {
          strategy: 'dummy',
          redirectDelay: 0,
          rememberMe: true,
          showMessages: {
            success: true,
            error: true,
          },
          socialLinks: [{
            url: 'https://twitter.com/akveo_inc',
            target: '_blank',
            icon: 'twitter',
          }],
        },
        requestPass: {
          strategies: 'email',
          showMessages: {
            success: true,
            error: true,
          },
        }
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
