import { Injectable } from '@angular/core';
import {Firestore, collection, collectionData, addDoc, deleteDoc, doc, docData, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from './characters';
import { Storage, getDownloadURL, ref, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { setDoc } from '@firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private firestore: Firestore,
    private storage: Storage) { }


  getCharacters(): Observable<Character[]>{
    const charactersRef = collection(this.firestore,'Characters');
    return collectionData(charactersRef) as Observable<Character[]>;
  }
  getCharacterById(id:string): Observable<Character> {
    const charactersRef = doc(this.firestore,`Characters/${id}`);
    return docData(charactersRef, {idField:'id'}) as Observable<Character>;
  }

  addCharacter(character:Character){
    const charactersRef = collection(this.firestore,'Characters');
    return addDoc(charactersRef,character);
  }
  
  deleteCharacter(character:Character){
    const charactersRef = doc(this.firestore,`Characters/${character.id}`);
    return deleteDoc(charactersRef);
  }

  updateCharacter(character:Character){
    const charactersRef = doc(this.firestore,`Characters/${character.id}`);
    return updateDoc(charactersRef,
      {
        nombre: character.nombre,
        clase: character.clase,
        raza : character.raza,
        edad : character.edad
      
      });
  }

  
  async changePhoto(cameraFile: Photo, character:Character){
    const path = `uploads/${character.id}/profile.png`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String || '', 'base64');

      const imageUrl = await getDownloadURL(storageRef);
      const mascotaRef = doc(this.firestore,`Characters/${character.id}`);
      await setDoc(mascotaRef, {imageUrl}, {merge:true});
      return true;
    }
    catch(error){
      return false;
    }
  }
}
