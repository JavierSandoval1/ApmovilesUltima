import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  pageTitle = 'bienvenido!';
  image = 'Dragon.png';
  pageIcon = `../../../assets/Img/${this.image}`;

  constructor() { }

  ngOnInit() {
  }

}
