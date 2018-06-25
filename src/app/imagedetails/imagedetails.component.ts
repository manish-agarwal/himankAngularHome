import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

  img1="../assets/1.png";
  img2="../assets/2.jpg";

  constructor() { }

  ngOnInit() {
  }

}
