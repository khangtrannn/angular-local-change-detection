import { AsyncPipe } from "@angular/common";
import { Component, Input, NgZone, inject } from "@angular/core";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="card">
      <span class="text-badge">{{title}}</span>
      <div class="image-wrapper">
        <img height="90px" [src]="getPokemon()" />
      </div>
    </div>
  `,
  styles: `
    .card {
      width: 150px;
      height: 150px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      background-color: #181825;
      position: relative;
    }

    .text-badge {
      font-size: 14px;
      position: absolute;
      color: #45475a;
      font-style: italic;
      top: 5px;
      right: 10px;
    }

    .image-wrapper {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class PokemonComponent {
  private currentPokemonId: number | undefined;
  @Input() title!: string;

  getPokemon(): string {
    const randomPokemonIndex = this.getRandomPokemonIndex();

    if (randomPokemonIndex === this.currentPokemonId) {
      return this.getPokemon();
    }

    this.currentPokemonId = randomPokemonIndex;
    return `/assets/pokemons/${randomPokemonIndex}.svg`;
  }

  private getRandomPokemonIndex(): number {
    return Math.floor(Math.random() * 99) + 1;
  }
}


