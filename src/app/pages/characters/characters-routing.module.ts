import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage
  },
  {
    path: 'modal-characters',
    loadChildren: () => import('./modal-characters/modal-characters.module').then( m => m.ModalCharactersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
