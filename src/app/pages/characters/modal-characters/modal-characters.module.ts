import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCharactersPageRoutingModule } from './modal-characters-routing.module';

import { ModalCharactersPage } from './modal-characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCharactersPageRoutingModule
  ],
  declarations: [ModalCharactersPage]
})
export class ModalCharactersPageModule {}
