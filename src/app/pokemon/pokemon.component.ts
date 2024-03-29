import { AsyncPipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RippleDirective } from "./ripple.directive";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [AsyncPipe, RippleDirective],
  template: `
    <div appRipple class="card cursor-pointer">
      <span class="text-badge">{{header}}</span>
      <div class="image-wrapper">
        <img height="90px" [src]="getPokemon()" />
      </div>
    </div>
  `,
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  private currentPokemonId: number | undefined;
  @Input() header!: string;

  getPokemon(): string {
    const randomPokemonIndex = this.getRandomPokemonIndex();

    if (randomPokemonIndex === this.currentPokemonId) {
      return this.getPokemon();
    }

    this.currentPokemonId = randomPokemonIndex;
    return `/assets/pokemons/${randomPokemonIndex}.svg`;
  }

  private getRandomPokemonIndex(): number {
    return Math.floor(Math.random() * 299) + 1;
  }
}


