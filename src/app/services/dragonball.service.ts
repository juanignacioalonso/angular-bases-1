import {  effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


const LoadFromLocalStorage = (): Character[]=>{

  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballServise {

    characters = signal<Character[]>(LoadFromLocalStorage());

    saveToLocalStorage = effect(()=>{
      localStorage.setItem('characters', JSON.stringify(this.characters()));
    });



    addCharacter(character:Character) {
      this.characters.update((list)=>[...list,character])
    }

}
