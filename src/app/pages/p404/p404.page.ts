import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p404',
  templateUrl: './p404.page.html',
  styleUrls: ['./p404.page.scss'],
})
export class P404Page implements OnInit {

  pageTitle = 'p404';
  image = 'Dragon.png';
  pageIcon = `../../../assets/Img/${this.image}`;

  constructor() { }

  ngOnInit() {
  }

}
