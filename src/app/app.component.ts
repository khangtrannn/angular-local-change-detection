import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './pokemon.component';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <app-pokemon title="Grand Child"></app-pokemon>
  `,
})
export class GrandChildComponent { }

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
    <app-pokemon title="Child One"></app-pokemon>

    <div class="flex flex-col mt-[5rem] items-center w-fit">
      <app-grand-child></app-grand-child>
      <button (click)="0" class="mt-4 w-fit cursor-pointer">Trigger something</button>
    </div>
  `,
})
export class ChildOneComponent { }

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <app-pokemon title="Child Two"></app-pokemon>
  `,
})
export class ChildTwoComponent { }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonComponent, ChildOneComponent, ChildTwoComponent],
  template: `
    <div class="flex flex-col mt-[4rem] items-center justify-center">
      <app-pokemon title="App"></app-pokemon>

      <div class="flex mt-[5rem] gap-[200px]">
        <app-child-one></app-child-one>
        <app-child-two></app-child-two>
      </div>
    <div> 
  `,
})
export class AppComponent {
  title = 'angular-local-change-detection';
}
