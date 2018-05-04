import {Inject, Injectable} from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              @Inject(DOCUMENT) private document: any) { }

  canActivate() {
    if (sessionStorage.getItem('SESSION')) {
      // logged in so return true
      return true;
    }

    this.document.location.href = './login';
    return false;
  }
}
