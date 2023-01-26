import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageTitle = 'about';
  image = 'Bdado20.png';
  pageIcon = `../../../assets/Img/${this.image}`;

  constructor() { }

  ngOnInit() {
  }

}
