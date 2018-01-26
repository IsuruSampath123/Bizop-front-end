import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  customerRegist = [
    'Item master file',
    'Finished goods prices',
    'Customer specific special prices and discounts',

  ];
  constructor() {
  }

  ngOnInit() {
  }


}
