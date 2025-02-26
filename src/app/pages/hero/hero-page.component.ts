import { UpperCasePipe } from '@angular/common';
import { computed, signal } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports:[UpperCasePipe]
})

export class HeroPageComponent  {

name = signal('Ironman')
age = signal(45)

heroDescription = computed(()=>{
  const description =  `${this.name()} - ${this.age()}`;
  return description;
})


changeHero() {
  this.name.set('Spiderman');
  this.age.set(22);
}

changeAge() {
  this.age.set(60);
}

resetForm() {
  this.name.set('Ironman');
  this.age.set(45);
}


}
