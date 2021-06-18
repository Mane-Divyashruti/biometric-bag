import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  toggleNav(nav: any) {
    if (nav.opened) {
      nav.close()
    } else {
      nav.open();
    }
  }

  ngOnInit() {
  }

}
