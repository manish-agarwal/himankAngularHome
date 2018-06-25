import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  uname="admin";
  password="admin";
  email="admin@cts.com";
  contact="12345";

  constructor() { }

  ngOnInit() {
  }

}
