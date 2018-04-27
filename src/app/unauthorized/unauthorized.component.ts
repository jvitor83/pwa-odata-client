import { AuthenticationService } from './../shared/auth/authentication/authentication.service';
import { AUTHENTICATION_SERVICE } from './../shared/auth/authentication/authentication-service.token';
import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';

import { ToastController } from '@ionic/angular';
//import { AUTH_SERVICE, BaseAuthService } from "../shared/services/base-auth.service";
import { IdentityService } from '../shared/auth/authentication/identity.service';

import { Network } from '@ionic-native/network/ngx';


@Component({
  moduleId: module.id,
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent implements OnInit {

  loggedIn;

  constructor(
    // @Inject(AUTH_SERVICE) private authService: BaseAuthService<any>,
    private authService: AuthenticationService,
    private identityService: IdentityService,
    private location: Location, private network: Network, public toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.identityService.user.subscribe(user => this.loggedIn = user.isAuthenticated);
  }

  Login() {
    const networkState = this.network.type;
    if (networkState !== 'none') {
      this.authService.login();
    } else {
      this.toastCtrl.create({
        message: 'Impossible to Login without Internet connection!',
        duration: 3000
      }).then((toast) => {
        toast.present();
      });
    }

  }
  goback() {
    this.location.back();
  }
}
