import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <router-outlet></router-outlet>
    <div class="flex flex-col gap-5 absolute top-[40px] right-[40px] text-white">
      <a routerLink="/">1. Default Strategy</a>
      <a routerLink="/on-push-strategy-demo">2. OnPush Strategy 1st</a>
      <a routerLink="/all-on-push-strategy-demo">3. OnPush Strategy 2nd</a>
    </div>
  `,
})
export class AppComponent {
  title = 'angular-local-change-detection';
}
