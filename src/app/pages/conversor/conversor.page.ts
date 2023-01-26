import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {


  pageTitle = 'conversor';
  image = 'Dragon.png';
  pageIcon = `../../../assets/Img/${this.image}`;

  listadoConversor : any = [];

  constructor(private rymService: ConversorService) { }

  ngOnInit() {
    this.getConversor();
  }
  

  getConversor(event?:any){
    this.rymService.getConversor()
    .then(data =>{
    this.listadoConversor = data;
    console.log(this.listadoConversor);
    
    if(event){
      event.target.complete();
    } 
    },
     (error) => {
        console.log(error);
      });

  }

  
}
