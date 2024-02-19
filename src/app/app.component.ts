import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <router-outlet></router-outlet>
    <div class="flex gap-5 absolute bottom-[40px] right-[40px] text-white">
      <a routerLink="/">Default Strategy</a>
      <a routerLink="/on-push-strategy-demo">OnPush Strategy 1st</a>
    </div>
  `,
})
export class AppComponent {
  title = 'angular-local-change-detection';
}
