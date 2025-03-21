import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  imports: [],
  templateUrl: './dragonball.component.html',

})
export class DragonballPageComponent {


  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 3, name: 'Yamcha', power: 500 },
  ]);

  addCharacter() {
    if(!this.name() || !this.power()|| this.power() <= 0){
      return;
    }

    const newCaracter :Character ={
      id: this.characters().length + 1,
      name: this.name(),
      power:this.power()
    }

    this.characters.update((list)=>[...list,newCaracter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
