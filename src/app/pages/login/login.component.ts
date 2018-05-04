import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from '../../services/fake-backend.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fmrGroup = new FormGroup({
    username: new FormControl('', Validators.nullValidator),
    password: new FormControl('', Validators.nullValidator),
  });
  constructor(private backend: FakeBackendService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.backend.login(this.fmrGroup.get('username').value, this.fmrGroup.get('password').value)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Wrong username or password.');
    }

  }
}
