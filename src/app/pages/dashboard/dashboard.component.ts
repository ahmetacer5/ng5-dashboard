import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from '../../services/fake-backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userInfo: any;

  constructor(private backend: FakeBackendService) {
    this.userInfo = this.backend.getUserInfo();
  }

  ngOnInit() {
  }

  logOut() {
    this.backend.logOut();
  }

}
