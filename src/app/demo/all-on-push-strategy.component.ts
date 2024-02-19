import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [PokemonComponent],
  template: `
    <div class="flex flex-col items-center mt-[5rem]">
      <app-pokemon class="on-push" header="Grand Child"></app-pokemon>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent { }

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
    <app-pokemon class="on-push" header="Child One"></app-pokemon>
    <app-grand-child></app-grand-child> 
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent { }

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [PokemonComponent, GrandChildComponent],
  template: `
      <app-pokemon class="on-push" header="Child Two"></app-pokemon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponent { }

@Component({
  selector: 'app-default-strategy',
  standalone: true,
  imports: [RouterOutlet, PokemonComponent, ChildOneComponent, ChildTwoComponent],
  template: `
    <div class="flex flex-col pt-[4rem] items-center justify-center">
      <app-pokemon class="on-push" class="root on-push" header="App"></app-pokemon>

      <div class="flex mt-[5rem] gap-[200px]">
        <app-child-one></app-child-one>
        <app-child-two></app-child-two>
      </div>
    <div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllOnPushStrategyComponent { }
