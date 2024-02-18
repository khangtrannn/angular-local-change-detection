import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <app-pokemon header="Grand Child"></app-pokemon>
  `,
})
export class GrandChildComponent { }

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
    <app-pokemon header="Child One"></app-pokemon>
    <app-grand-child class="block mt-[5rem]"></app-grand-child>
  `,
})
export class ChildOneComponent { }

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
    <app-pokemon header="Child Two"></app-pokemon>
    <app-grand-child class="block mt-[5rem]"></app-grand-child>
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
