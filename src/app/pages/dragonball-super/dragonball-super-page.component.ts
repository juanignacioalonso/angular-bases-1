import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballServise } from '../../services/dragonball.service';




@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  //Inyeccion tradicional
  //constructor(public dragonballService: DragonballServise){}

  //Inyeccion como se hace ahora

  public dragonballService = inject(DragonballServise);

}
