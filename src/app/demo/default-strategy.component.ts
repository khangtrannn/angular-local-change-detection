import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <div class="flex flex-col items-center mt-[5rem]">
      <app-pokemon header="Grand Child"></app-pokemon>
      <button class="mt-2 px-2 py-[2px] w-fit text-center border-none cursor-pointer text-[13px]" (click)="0">
        Log something
      </button>
    </div>
  `,
})
export class GrandChildComponent { }

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
    <app-pokemon header="Child One"></app-pokemon>
    <app-grand-child></app-grand-child> 
  `,
})
export class ChildOneComponent { }

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
    <app-pokemon header="Child Two"></app-pokemon>
  `,
})
export class ChildTwoComponent { }

@Component({
  selector: 'app-default-strategy',
  standalone: true,
  imports: [RouterOutlet, PokemonComponent, ChildOneComponent, ChildTwoComponent],
  template: `
    <div class="flex flex-col mt-[4rem] items-center justify-center">
      <app-pokemon class="root" header="App"></app-pokemon>

      <div class="flex mt-[5rem] gap-[200px]">
        <app-child-one></app-child-one>
        <app-child-two></app-child-two>
      </div>
    <div>
  `,
})
export class DefaultStrategyComponent { }
