import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FakeBackendService {

  constructor(private router: Router) {
  }

  login(userName: string, password: string) {
    if (userName === 'admin' && password === 'admin') {
      sessionStorage.setItem('SESSION', JSON.stringify({
        userName,
        name: 'Ahmet',
        surName: 'Acer'
      }));
      return true;
    }
    return false;
  }

  logOut() {
    sessionStorage.removeItem('SESSION');
    this.router.navigate(['./login']);
  }

  getUserInfo() {
    return JSON.parse(sessionStorage.getItem('SESSION'));
  }

  setUserInfo(userName, name, surName, profileImage) {
    sessionStorage.setItem('SESSION', JSON.stringify({
      userName,
      name,
      surName,
      profileImage
    }));
  }
}
