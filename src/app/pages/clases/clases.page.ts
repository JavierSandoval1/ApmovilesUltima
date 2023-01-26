import { Component, OnInit,ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { DndserviceService } from 'src/app/services/dndservice.service';


@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  pageTitle = 'clases';
  image = 'Dragon.png';
  pageIcon = `../../../assets/Img/${this.image}`;

  listadoClases: any = [];

  @ViewChild(IonInfiniteScroll) infinite!: IonInfiniteScroll;

  constructor(private rymService: DndserviceService,
    private navController: NavController) {}

    ngOnInit() {
      this.getListadoClases()
    }

getListadoClases(cargarMas:boolean=false, event?:any){
    
    this.rymService.getListadoClases()
    .then(data => {
      this.listadoClases = [...this.listadoClases,...data.results];
      console.log(this.listadoClases);
      if(event){
        event.target.complete();
      }
      //solo si queremos evitar el loop eterno
      if(data.info.next === null){
        this.infinite.disabled= true;
      }
    },
    (error) => {
      console.log(error);
    });
  }
  

  


}
