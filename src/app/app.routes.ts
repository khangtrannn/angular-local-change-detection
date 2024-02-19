import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'on-push-strategy-demo', loadComponent: async () => (await import('./demo/on-push-strategy.component')).OnPushStrategyComponent },
  { path: '', pathMatch: 'full', loadComponent: async () => (await import('./demo/default-strategy.component')).DefaultStrategyComponent },
];
