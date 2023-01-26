import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/services/characters';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalCharactersPage } from './modal-characters/modal-characters.page';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  pageTitle = 'characters';
  image = 'Dragon.png';
  pageIcon = `../../../assets/Img/${this.image}`;

  lCharacter: Character[] = [];

  constructor(private charactersService : CharactersService,
    private alertCtrl : AlertController,
    private toastCtrl : ToastController,
    private modalCtrl : ModalController,
    private loadingCtrl : LoadingController ) { }

  ngOnInit() {
    this.getCharacters()
  }

  getCharacters(){
    this.charactersService.getCharacters()
    .subscribe( data => {
      console.log(data);
      this.lCharacter = data;

    })
  }

 async addCharacter(){
  const alert = await this.alertCtrl.create({
    header: 'Registrar Personaje',
    inputs : [
      {
        name:'nombre',
        type:'text',
        placeholder:'Nombre del personaje'
      },
      {
        name:'edad',
        type:'number',
        placeholder:'Edad del personaje'
      },
      {
        name:'raza',
        type:'text',
        placeholder:'Raza del personaje'
      },
      {
        name:'clase',
        type:'text',
        placeholder:'Clase del personaje'
      }

    ],
    buttons: [
      {
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Save',
        role:'confirm',
        handler: (data) => {
          this.charactersService.addCharacter(data)
        }
      }
    ]
  });
  
  await alert.present();
  }

  async openCharacter(character:Character){
    const modal = await this.modalCtrl.create({
      component: ModalCharactersPage,
      componentProps: {id:character.id},
      initialBreakpoint: 1.0,
      breakpoints: [0,0.5,0.8],
    });
    await modal.present();
  }
}
