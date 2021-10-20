import { Component, OnInit } from '@angular/core';
import {NbAuthComponent, NbAuthService} from '@nebular/auth'
import {Location} from '@angular/common'

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent extends NbAuthComponent implements  OnInit{

  constructor(private authService: NbAuthService, private fLocation: Location) {
    super(authService, fLocation)
  }

  ngOnInit(): void {
  }

}
