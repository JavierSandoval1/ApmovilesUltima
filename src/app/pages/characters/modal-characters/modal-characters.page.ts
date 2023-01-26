import { Component, OnInit, Input } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Character } from 'src/app/services/characters';
import { CharactersService } from 'src/app/services/characters.service';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-modal-characters',
  templateUrl: './modal-characters.page.html',
  styleUrls: ['./modal-characters.page.scss'],
})
export class ModalCharactersPage implements OnInit {

  @Input() id: string = '';
  character?: Character; 


  constructor(
    private charactersService: CharactersService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter(){
    this.charactersService.getCharacterById(this.id).subscribe(data => {
      this.character = data;
    });
  }

  async updateCharacter(){
    this.charactersService.updateCharacter(this.character!);
    this.modalCtrl.dismiss();
    this.toastPresent('PERSONAJE ACTUALIZADO, CAGÓN!',2000);
  }

  async deleteCharacter(){
    const alert = await this.alertCtrl.create({
      header: 'Eliminando...',
      message:'Estas seguro que deseas terminar la aventura de este personaje?',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          role:'confirm',
          handler: () => {
            this.charactersService.deleteCharacter(this.character!);
            this.modalCtrl.dismiss();
            this.toastPresent('Personaje Eliminado!',2000);
          }
        }
      ]
    });
    await alert.present();
  }

  async toastPresent(message:string, duration:number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    await toast.present();
  }

  async changeImage(character:Character){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    console.log(image);

    if(image){
      const loading = await this.loadingCtrl.create();
      await loading.present();

      const results = await this.charactersService.changePhoto(image,character);
      loading.dismiss();

      if(!results){
        const alert = await this.alertCtrl.create({
          header: 'Carga de imagen fallida',
          message:'Hubo un problema durante la carga de la imagen.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

}
